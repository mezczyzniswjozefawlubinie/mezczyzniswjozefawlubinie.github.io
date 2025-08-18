import React from 'react'

interface Post {
  "userId": number,
  "id": number,
  "title": string,
  "body": string
}

const BlogBoard = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await response.json()

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)} 
        </ul>
    </div>
  )
}

export default BlogBoard