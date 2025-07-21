export function createMaterialWave(e, element) {
  const rect = element.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = e.clientX - rect.left - size / 2
  const y = e.clientY - rect.top - size / 2

  const wave = document.createElement('span')
  wave.className = 'material-wave'
  wave.style.width = wave.style.height = `${size}px`
  wave.style.left = `${x}px`
  wave.style.top = `${y}px`

  element.appendChild(wave)

  setTimeout(() => {
    if (wave && wave.parentNode) {
      wave.parentNode.removeChild(wave)
    }
  }, 600)
}

export function initAnimations() {
  const clickableElements = document.querySelectorAll(`
    [contenteditable],
    .section,
    .experience-item,
    .education-item,
    .tag,
    .language-level-bar,
    h1, h2, h3, h4
  `)

  clickableElements.forEach(element => {
    element.addEventListener('click', (e) => {
      createMaterialWave(e, element)
    })
  })

  const editableElements = document.querySelectorAll('[contenteditable]')

  editableElements.forEach(element => {
    let originalContent = element.textContent

    element.addEventListener('input', () => {
      element.classList.add('content-changed')
      setTimeout(() => {
        element.classList.remove('content-changed')
      }, 1000)
    })

    element.addEventListener('blur', () => {
      if (element.textContent !== originalContent) {
        originalContent = element.textContent
      }
    })
  })
}
