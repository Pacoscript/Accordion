import "./style.sass";

class Accordion {

  constructor(dl) {
    this.dl = dl
    this.dtElements = document.querySelectorAll('dt')
    this.ddElements = document.querySelectorAll('dd')
  }
  
  assign() {
    this.dl.classList.add('Accordion-list')
    this.dtElements.forEach(dt => dt.classList.add('Accordion-name'))
    this.ddElements.forEach(dd => dd.classList.add('Accordion-descrip'))
  }

  handleToggleClass() {
    this.dl.addEventListener('click', (event) => {
      const dt = event.target
      if (dt.tagName === 'DT') {
      const dd = event.target.nextElementSibling
      this.dtElements.forEach(dteach => {
        if(dteach != dt) dteach.classList.replace('Accordion-name--active', 'Accordion-name' )
      })
      this.ddElements.forEach(ddeach => {
        if(ddeach != dd) ddeach.classList.replace('Accordion-descrip--active', 'Accordion-descrip' )})
      dt.classList.toggle('Accordion-name--active')
      dd.classList.toggle('Accordion-descrip--active')
      }
    })
  }

  init() {
    this.assign()
    this.handleToggleClass()
  }
}

export default Accordion
