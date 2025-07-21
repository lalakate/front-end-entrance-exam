import './languages.css'

const languages = [
  { name: 'English', level: 100 },
  { name: 'Malayalam', level: 100 },
  { name: 'Hindi', level: 80 }
]

export function createLanguagesBlock() {
  const elements = languages.map((language, index) => {
    return `<li class='language-label'>
            <h3 contenteditable data-key='languages.item.${index}'>${language.name}</h3>
            <div class='language-level-bar green-bg' style='--language-level: ${language.level}%'></div>
        </li>`
  })

  return `
    <section class='languages extra-bg section'>
        <h2 contenteditable data-key='languages.title'>Languages</h2>
        <ul class='languages-list'>
            ${elements.join('')}
        </ul>
    </section>`
}
