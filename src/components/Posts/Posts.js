import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h2>this is all posts: {posts.length}</h2>
            <div>
                {
                    posts.map(post => <PostDetails
                    key = {post.id}
                    post = {post}
                    ></PostDetails>)
                }
            </div>
        </div>
    );
};

export default Posts;