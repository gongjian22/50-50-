const leftArea = document.querySelector('.left')

const rightArea = document.querySelector('.right')
const container = document.querySelector('.container')

leftArea.addEventListener('mouseenter', () => {
  container.classList.add('hover-left')
})
leftArea.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left')
})

rightArea.addEventListener('mouseenter', () => {
  container.classList.add('hover-right')
})
rightArea.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right')
})
