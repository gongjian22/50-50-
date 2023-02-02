const jokeE1 = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)
    // console.log('res1:', res);


  const data = await res.json()
    // console.log('res2:', res.json());

  jokeE1.innerHTML = data.joke
}
