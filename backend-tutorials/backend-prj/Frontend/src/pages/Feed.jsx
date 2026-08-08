import React from 'react'
import { useState } from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([])
  return (
    <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card'>
                            <img src={posts.image} alt={posts.caption} />
                            <p>{posts.caption}</p>
                        </div>
                    ))
                ) : (
                    <h3>No posts available</h3>
                )
            }
    </section>
  )
}

export default Feed