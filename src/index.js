import Accordion from './components/Accordion/Accordion'

document.addEventListener('DOMContentLoaded', () => {
  const dl = document.querySelector('dl')
  const accordion = new Accordion(dl)
  accordion.init()
})
