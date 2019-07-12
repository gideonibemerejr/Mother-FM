import tokenUtil from './tokenUtil'

const BASE_URL = 'http://localhost:3001/api/mixes/'

export default {
  index,
  getFirstSix,
  create
}

function index() {
  const options = {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + tokenUtil.getToken() }
  }
  return fetch(BASE_URL + 'archive', options).then(res => res.json())
}

function getFirstSix() {
  const options = {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' })
  }
  return fetch(BASE_URL, options).then(res => res.json())
}

function create(link) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + tokenUtil.getToken()
    },
    body: JSON.stringify(link)
  }
  return fetch(BASE_URL, options).then(res => res.json())
}
