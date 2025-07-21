import './education.css'

const educations = [
  {
    year: '2023',
    direction: 'UI/UX',
    tags: [
      'UX', 'UI', 'research', 'DesignSystem', 'Ui', 'wireframing', 'figma', 'Ux'
    ],
    place: 'Coursera'
  },
  {
    year: '2017 - 2022',
    direction: 'Law',
    tags: [
      'law', 'legalStudies', 'contracts', 'internationalLaws'
    ],
    place: 'University of Kerala'
  },
  {
    year: '2017',
    direction: 'Graphic design',
    tags: [
      'branding', 'web', 'illustration', 'adobe'
    ],
    place: 'Coursera'
  }
]

export function createEducationBlock() {
  const elements = educations.map((element, index) => {
    const tagElements = element.tags.map((tag, ind) => `<span contenteditable data-key='education.item.tags.${ind}' class='tag'>#${tag}</span>`).join('')

    return `
            <li class='education-item'>
                <h3 contenteditable data-key='education.item.${index}.date'>${element.year}</h3>
                <div>
                    <h3 contenteditable data-key='education.item.${index}.direction'>${element.direction}</h3>
                    <div contenteditable class='education-item-tags subtitle-3' data-key='education.item.${index}.tags'>${tagElements}</div>
                </div>
                <p contenteditable class='education-item-place subtitle-3' data-key='education.item.${index}.place'>${element.place}</p>
            </li>
        `
  }).join('')

  return `
        <section class='educations extra-bg section'>
            <h2 contenteditable data-key='education.title'>Education</h2>
            <ul class='educations-list'>${elements}</ul>
        </section>
    `
}
