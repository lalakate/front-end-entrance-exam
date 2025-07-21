import './tools.css'

import templateLogo from '/logos/logoAdobePremiere.svg'

const fields = [
  {
    title: 'design',
    logos: Array(6).fill(templateLogo)
  },
  {
    title: 'no-code',
    logos: Array(4).fill(templateLogo)
  },
  {
    title: 'artificial intelligence',
    logos: Array(3).fill(templateLogo)
  }
]

const elements = fields.map(field => {
  const logos = field.logos.map(logo => `<img class='tools-logo' src='${logo}'/>`)

  return `
    <li class='tools-item main-bg' data-title='${field.title}'>${logos.join('')}</li>
    `
})

export function createToolsBlock() {
  return`
        <section class='tools extra-bg section'>
            <h2 contenteditable data-key='tools.title'>Tools</h2>
            <ul class='tools-list'>${elements.join('')}</ul>
        </section>
    `
}
