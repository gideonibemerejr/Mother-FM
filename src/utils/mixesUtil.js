import tokenUtil from './tokenUtil'

const BASE_URL = 'http://localhost:3001/api/mixes'

function index() {
  console.log('line 6')
  const options = {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + tokenUtil.getToken() }
  }
  return fetch(BASE_URL + '/all', options).then(res => res.json())
}

function createMix(link) {
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

function getFirstSix() {}
export default {
  index,
  getFirstSix,
  createMix
}
