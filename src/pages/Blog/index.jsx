import React, { Component } from 'react'
import postsUtil from '../../utils/postsUtil'
import BlogPost from '../../components/BlogPost'
class BlogPage extends Component {
  state = {
    posts: []
  }

  handleGetPosts = async () => {
    const posts = await postsUtil.index()
    this.setState({ posts })
  }
  componentDidMount() {
    this.handleGetPosts()
  }

  render() {
    const posts = this.state.posts.map((post, index) => {
      return <BlogPost {...post} key={post._id} index={index} />
    })
    return (
      <div className="flex flex-column justify-center ph4 ph4-l fade-in">
        <h2>Blog Page</h2>
        <ul className="list flex flex-column fade-in">{posts}</ul>
      </div>
    )
  }
}

export default BlogPage
