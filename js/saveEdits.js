export function saveEdits() {
  const elements = document.querySelectorAll('[contenteditable]')

  elements.forEach(element => {
    element.addEventListener('blur', () => {
      const selector = element.getAttribute('data-key')
      localStorage.setItem(`data-storage-${selector}`, element.innerHTML)
    })
  })

  for (const key in localStorage) {
    if(key.includes('data-storage-')) {
      const selector = key.replace('data-storage-', '')
      document.querySelector(`[data-key='${selector}']`).innerHTML = localStorage.getItem(key)
    }
  }
}
