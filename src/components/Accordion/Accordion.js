"use strict"

import "./Accordion.sass"
import Request from "../Request/Request"
import Option from "../Option/Option"

class Accordion {
  constructor(dl) {
    this.dl = dl
    this.request = new Request(
      "https://api.themoviedb.org/3/search/movie?api_key=e187746b7167e4886a5d0a2f1ead5a18&language=en-US&query=kill%20bill%20vol2&page=1&include_adult=false"
    )
  }

  async init() {
    await this.addAccordionOption()
    this.handleAssignClass()
    this.handleToggleClass()
  }

  handleAssignClass() {
    this.dtElements = document.querySelectorAll("dt")
    this.ddElements = document.querySelectorAll("dd")
    this.dl.classList.add("Accordion-list")
    this.dtElements.forEach(dt => dt.classList.add("Accordion-name"))
    this.ddElements.forEach(dd => dd.classList.add("Accordion-descrip"))
  }

  handleToggleClass() {
    this.dl.addEventListener("click", event => {
      const dt = event.target
      if (dt.tagName === "DT") {
        const dd = event.target.nextElementSibling
        this.dtElements.forEach(dteach => {
          if (dteach != dt)
            dteach.classList.replace("Accordion-name--active", "Accordion-name")
        })
        this.ddElements.forEach(ddeach => {
          if (ddeach != dd)
            ddeach.classList.replace(
              "Accordion-descrip--active",
              "Accordion-descrip"
            )
        })
        dt.classList.toggle("Accordion-name--active")
        dd.classList.toggle("Accordion-descrip--active")
      }
    })
  }

  async addAccordionOption() {
    const result = await this.request.getAjaxOption()
    const newOption = new Option(result, this.dl)
    newOption.handleCreateTag()
  }
}

export default Accordion
