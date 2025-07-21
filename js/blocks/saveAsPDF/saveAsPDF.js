import './saveAsPDF.css'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export function saveAsPDF() {
  return '<button id="save-pdf" class="save-button">Save as PDF</button>'
}

function applyDesktopLayout() {
  const app = document.querySelector('#app')
  const saveButton = document.querySelector('#save-pdf')

  const originalStyles = {
    app: app.style.cssText,
    body: document.body.style.cssText
  }

  if (saveButton) {
    saveButton.style.display = 'none'
  }

  app.style.cssText = `
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    grid-template-rows: repeat(4, auto) !important;
    gap: 20px !important;
    width: 595px !important;
    max-width: 595px !important;
    min-width: 595px !important;
    padding: 12px !important;
    margin: 0 auto !important;
    background-color: white !important;
    color: black !important;
    box-sizing: border-box !important;
  `

  const style = document.createElement('style')
  style.id = 'temp-pdf-styles'
  style.textContent = `
    /* Основная сетка как на десктопе */
    .profile-photo {
      grid-area: 1 / 1 / 2 / 2 !important;
      max-width: 126px !important;
      width: 100% !important;
      aspect-ratio: 1 !important;
      border-radius: 12px !important;
    }
    
    .profile-info {
      grid-area: 1 / 2 / 2 / 3 !important;
      justify-content: space-between !important;
    }
    
    .languages {
      grid-area: 1 / 3 / 2 / 5 !important;
    }
    
    /* Правильный селектор для опыта */
    .experiences {
      grid-area: 2 / 1 / 3 / 4 !important;
    }
    
    .tools {
      grid-area: 2 / 4 / 3 / 5 !important;
      padding-bottom: 0 !important;
    }
    
    /* Правильный селектор для образования */
    .educations {
      grid-area: 3 / 1 / 5 / 3 !important;
    }
    
    .interests {
      grid-area: 3 / 3 / 4 / 5 !important;
    }
    
    .feedback {
      grid-area: 4 / 3 / 5 / 5 !important;
    }
    
    .section {
      display: flex !important;
      flex-direction: column !important;
      border-radius: 12px !important;
      gap: 12px !important;
      padding: 12px !important;
    }
    
    .tools-list {
      display: flex !important;
      flex-direction: column !important;
      gap: 12px !important;
      width: calc(100% - 24px) !important;
      align-self: center !important;
    }
    
    .tools-item {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      position: relative !important;
      padding: 16px 4px !important;
      border-radius: 6px !important;
      flex: 1 !important;
      gap: 16px !important;
    }
    
    .tools-logo {
      max-width: 16px !important;
      width: 100% !important;
      aspect-ratio: 1 !important;
    }
    
    .tools-logo:nth-of-type(odd) {
      justify-self: end !important;
    }
    
    .tools-logo:nth-of-type(even) {
      justify-self: start !important;
    }
    
    /* Типографика в оригинальных размерах */
    h1 { font-size: 24px !important; line-height: 1.2 !important; font-weight: 600 !important; }
    h2 { font-size: 14px !important; line-height: 1.5 !important; font-weight: 500 !important; }
    h3 { font-size: 10px !important; line-height: 1.5 !important; font-weight: 500 !important; }
    h4 { font-size: 8px !important; line-height: 1.5 !important; font-weight: 500 !important; }
    
    .subtitle-1 { font-size: 12px !important; line-height: 1.5 !important; font-weight: 400 !important; }
    .subtitle-2 { font-size: 10px !important; line-height: 1.5 !important; font-weight: 400 !important; }
    .subtitle-3 { font-size: 8px !important; line-height: 1.5 !important; font-weight: 400 !important; }
    
    .language-label {
      display: grid !important;
      grid-template-columns: auto 1fr !important;
      grid-column-gap: 17px !important;
      align-items: center !important;
    }
    
    .languages-list {
      display: flex !important;
      flex-direction: column !important;
      row-gap: 12px !important;
    }
    
    .language-level-bar {
      height: 11px !important;
      border-radius: 3px !important;
      width: var(--language-level, 100%) !important;
      justify-self: start !important;
      background-color: #28d979 !important;
    }
    
    /* Образование в 2 колонки */
    .education-item {
      display: flex !important;
      flex-direction: column !important;
      border-radius: 10px !important;
      padding: 8px !important;
      gap: 8px !important;
      background-color: var(--education-item-bg, #fff) !important;
      color: var(--education-item-color, #000) !important;
      width: calc(50% - 6px) !important;
      height: min-content !important;
    }
    
    .educations-list {
      display: flex !important;
      gap: 12px !important;
      flex-wrap: wrap !important;
      justify-content: space-between !important;
    }
    
    /* Опыт работы */
    .experience-list {
      display: flex !important;
      flex-direction: column !important;
      gap: 12px !important;
    }
    
    .experience-item {
      display: flex !important;
      flex-direction: column !important;
      padding: 8px !important;
      gap: 8px !important;
      border-radius: 10px !important;
      color: var(--experience-item-color, #000) !important;
      background-color: var(--experience-item-bg, #fff) !important;
    }
    
    .experience-item-content {
      display: grid !important;
      grid-template-columns: 1fr 2fr !important;
      grid-column-gap: 8px !important;
    }
    
    /* Интересы */
    .interests-list {
      display: flex !important;
      gap: 8px !important;
      flex-wrap: wrap !important;
    }
    
    .interest-item {
      padding: 4px 10px !important;
      border-radius: 40px !important;
    }
    
    .profile-name {
      font-size: 14px !important;
      font-weight: 600 !important;
      line-height: 104% !important;
    }
    
    .profile-job {
      font-size: 12px !important;
      font-weight: 500 !important;
      color: #5c5c5c !important;
    }
    
    .profile-description {
      font-size: 10px !important;
      font-weight: 500 !important;
    }

    /* Переопределяем медиа-запросы */
    @media screen and (max-width: 1200px) {
      #app {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        grid-template-rows: repeat(4, auto) !important;
        gap: 20px !important;
        width: 595px !important;
        padding: 12px !important;
      }
      
      .profile-photo { grid-area: 1 / 1 / 2 / 2 !important; }
      .profile-info { grid-area: 1 / 2 / 2 / 3 !important; }
      .languages { grid-area: 1 / 3 / 2 / 5 !important; }
      .experiences { grid-area: 2 / 1 / 3 / 4 !important; }
      .tools { grid-area: 2 / 4 / 3 / 5 !important; }
      .educations { grid-area: 3 / 1 / 5 / 3 !important; }
      .interests { grid-area: 3 / 3 / 4 / 5 !important; }
      .feedback { grid-area: 4 / 3 / 5 / 5 !important; }
    }
  `

  document.head.appendChild(style)

  return { style, originalStyles, saveButton }
}

function removeDesktopLayout({ style, originalStyles, saveButton }) {
  const app = document.querySelector('#app')

  app.style.cssText = originalStyles.app
  document.body.style.cssText = originalStyles.body

  if (saveButton) {
    saveButton.style.display = 'block'
  }

  if (style && style.parentNode) {
    style.parentNode.removeChild(style)
  }
}

export function initSaveAsPDF(selector) {
  const button = document.querySelector(selector)
  if (button) {
    button.addEventListener('click', async () => {
      let desktopLayout = null

      try {
        desktopLayout = applyDesktopLayout()

        await new Promise(resolve => setTimeout(resolve, 500))

        const element = document.querySelector('#app')

        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          width: 580,
          backgroundColor: '#ffffff'
        })

        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')

        const pdfWidth = 210
        const pdfHeight = 297
        const imgWidth = pdfWidth - 20
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        if (imgHeight <= pdfHeight - 20) {
          const yPosition = (pdfHeight - imgHeight) / 2
          pdf.addImage(imgData, 'PNG', 10, yPosition, imgWidth, imgHeight)
        } else {
          const scaledHeight = pdfHeight - 20
          const scaledWidth = (canvas.width * scaledHeight) / canvas.height
          pdf.addImage(imgData, 'PNG', 10, 10, scaledWidth, scaledHeight)
        }

        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-')
        pdf.save(`resume-${timestamp}.pdf`)

      } catch (error) {
        console.error('Error generating PDF:', error)
      } finally {
        if (desktopLayout) {
          removeDesktopLayout(desktopLayout)
        }
      }
    })
  }
}
