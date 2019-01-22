import "./style.sass";

class Accordion {

  constructor(dl, ajaxCall) {
    this.dl = dl
    this.addAccordionOption(ajaxCall)
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

  addAccordionOption(ajaxCall) {
    const name = document.createElement('dt')
    const descrip = document.createElement('dd')
    this.getAjaxOption(ajaxCall)
      .then(res => {
        name.textContent = `${res.results[0].title}`
        descrip.innerHTML = `<p>${res.results[0].overview}</p>`
    })
    name.classList = 'Accordion-name'
    descrip.classList ='Accordion-descrip'
    this.dl.appendChild(name)
    this.dl.appendChild(descrip)
  }

  getAjaxOption(ajaxCall) {
    return fetch(ajaxCall)
      .then(res => res.json())
      .catch(err => console.error(err))
  }

  init() {
    this.assign()
    this.handleToggleClass()
    
  }
}

export default Accordion
