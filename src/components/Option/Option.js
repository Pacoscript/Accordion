"use strict"

class Option {
  constructor(result, dl) {
    this.result = result
    this.dl = dl
  }

  handleCreateTag() {
    const name = document.createElement("dt")
    const descrip = document.createElement("dd")
    name.classList = "Accordion-name"
    descrip.classList = "Accordion-descrip"
    this.dl.appendChild(name)
    this.dl.appendChild(descrip)
    name.textContent = `${this.result.results[0].title}`
    descrip.innerHTML = `<p>${this.result.results[0].overview}</p>`
  }
}

export default Option
