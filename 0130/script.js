const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.innerText = sound
  btn.classList.add('btn')
  document.getElementById('buttons').appendChild(btn)
  btn.addEventListener('click', () => {
    stopALL()
    document.getElementById(sound).play()
  })
})

function stopALL() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0

  })
}
