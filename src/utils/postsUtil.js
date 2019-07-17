import tokenUtil from './tokenUtil'

const BASE_URL = 'https://motherfmapi.herokuapp.com/api/posts'

function index() {
  const options = {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + tokenUtil.getToken() }
  }
  return fetch(BASE_URL, options).then(res => res.json())
}

function createPost(post) {
  console.log('line 14', post)
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + tokenUtil.getToken()
    },
    body: JSON.stringify(post)
  }
  console.log(options)
  return fetch(BASE_URL, options).then(res => res.json())
}

export default {
  index,
  createPost
}
