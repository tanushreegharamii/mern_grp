
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function TestFeed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch posts from backend
        axios.get('http://localhost:3000/getdata')
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading posts...</p>;
    }

  return (
    <div>
    <h2>Posts</h2>
    {posts.length > 0 ? (
        posts.map(post => (
            <div  key={post._id} className="post bg-slate-600">
                <h3>{post.title}</h3>
                <p className='text-black'>The Post : {post.post}</p>
                <p className='text-black'>The Title: {post.title}</p>
                <p className='text-black'><strong>Posted by:</strong> {post.userId?.username} (ID: {post.userId?._id})</p>
            </div>
        ))
    ) : (
        <p>No posts found.</p>
    )}
</div>
  )
}

export default TestFeed
