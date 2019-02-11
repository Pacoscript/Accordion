'use strict'

class Request {
    constructor(url) {
        this.url = url
    }

    getAjaxOption(url) {
        return fetch(this.url)
          .then(res => res.json())
          .catch(err => console.error(err))
      }
}

export default Request