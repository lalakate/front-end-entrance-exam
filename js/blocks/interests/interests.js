import './interests.css'

const interests = [
  'branding', 'design', 'photography', 'artificial intelligence', 'illustration', 'typography', 'social networks', 'research', 'dron pilots', 'games'
]

export function createInterestsBlock() {
  const elements = interests.map((interest, index) => {
    return `
            <li class='interest-item main-bg subtitle-2' contenteditable data-key='interest.item.${index}'>
                ${interest}
            </li>
        `
  })

  return `
        <section class='interests extra-bg section'>
            <h2 contenteditable data-key='interests-title'>Interests</h2>
            <ul class='interests-list'>
                ${elements.join('')}
            </ul>
        </section>
    `
}
