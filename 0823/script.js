const button = document.querySelector('#button');
const toasts = document.querySelector('#toasts');

const message = [
  'message one',
  'message two',
  'message three',
  'message four',
]

const types = ['info','success','error']

button.addEventListener('click',()=> createNotification())

function createNotification (message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type?type:getRandomType())

  notif.innerHTML= message?message:getRandomMessage()

  toasts.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage () {
  return message[Math.floor(Math.random()*message.length)]
}

function getRandomType () {
  return types[Math.floor(Math.random()*types.length)]
}