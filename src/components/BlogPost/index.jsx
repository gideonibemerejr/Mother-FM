import React from 'react'

function BlogPost({ title, mixlink, body }) {
  return (
    <li className="mb2">
      <h3>{title}</h3>
      <p>{body}</p>
      <p>
        Read more <a href={mixlink}>here</a>.
      </p>
    </li>
  )
}

export default BlogPost
