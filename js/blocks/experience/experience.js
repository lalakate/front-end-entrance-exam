import './experience.css'

const experiences = [
  {
    date: 'Jun. 2023 - Present',
    title: 'Marketing Manager',
    info: 'Pankayam | Full-time',
    description: [
      'Strategy development and planning of campaigns that promote the business and generate genuine traffic',
      'SEO Content Creation for Blogs, Website, Social media'
    ]
  },
  {
    date: '2017 - Present',
    title: 'Graphic / Web designer',
    info: 'Freelance',
    description: [
      'Development of internal projects from scratch, product design of brands',
      'Landing page, webapps and hybrid apps',
      'Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.'
    ]
  },
  {
    date: 'Sep. 2021 - Jun. 2023',
    title: 'Legal Assistant',
    info: 'Law Firm | Intern',
    description: [
      'Provide administrative support to lawyer and enhance office effectiveness',
      'Handle communication with clients, witnesses etc.',
      'repare case briefs and summarize depositions, interrogatories and testimony'
    ]
  }
]

export function createExperienceBlock() {
  const elements = experiences.map((experience, index) => createItem(experience, index)).join('')

  return `
        <section class='experiences extra-bg section'>
            <h2 contenteditable data-key='experience.title'>Experience</h2>
            <ul class='experience-list'>${elements}</ul>
        </section>
    `
}

function createItem({ date, title, info, description }, index) {
  const descriptionElements = description.map((element, ind) => `<li class='experience-description-elem subtitle-3' contenteditable data-key='experience.description.${ind}'>${element}</li>`).join('')

  return `
    <li class='experience-item'>
        <div class='experience-item-header'>
            <h4 contenteditable data-key='experience.date.${index}'>${date}</h4>
        </div>
        <div class='experience-item-content'>
            <div>    
                <h3 contenteditable data-key='experience.title.${index}'>${title}</h3>
                <p contenteditable class='experience-info subtitle-3' data-key='experience.info.${index}'>${info}</p>
            </div>
            <ul class='description-list'>
            ${descriptionElements}
            </ul>
        </div>
    </li>
    `
}
