import Accordion from './components/Accordion'

document.addEventListener('DOMContentLoaded', () => {
  const dl = document.querySelector('dl')
  const ajaxCall = 'https://api.themoviedb.org/3/search/movie?api_key=e187746b7167e4886a5d0a2f1ead5a18&language=en-US&query=kill%20bill%20vol2&page=1&include_adult=false'
  const accordion = new Accordion(dl, ajaxCall )
  accordion.init()
})
