import { createEducationBlock } from './blocks/education/education'
import { createExperienceBlock } from './blocks/experience/experience'
import { createFeedback } from './blocks/feedback/feedback'
import { createInterestsBlock } from './blocks/interests/interests'
import { createLanguagesBlock } from './blocks/languages/languages'
import { createProfileInfoBlock } from './blocks/profileInfo/profileInfo'
import { createProfilePhotoBlock } from './blocks/profilePhoto/profilePhoto'
import { createToolsBlock } from './blocks/tools/tools'
import { initAnimations } from './animation'

import '../vendor/normalize.css'
import '../vendor/fonts.css'
import '../css/style.css'
import { saveEdits } from './saveEdits'
import { initSaveAsPDF, saveAsPDF } from './blocks/saveAsPDF/saveAsPDF'

document.querySelector('#app').innerHTML = [
  saveAsPDF(),
  createProfilePhotoBlock(),
  createProfileInfoBlock(),
  createLanguagesBlock(),
  createExperienceBlock(),
  createToolsBlock(),
  createEducationBlock(),
  createInterestsBlock(),
  createFeedback()
].join('\n')

saveEdits()
initSaveAsPDF('#save-pdf')

document.addEventListener('DOMContentLoaded', () => {
  initAnimations()
})
