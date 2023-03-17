import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        console.log(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/posts`);
        const fetchPosts = async () => {
        const { data } = await axios.get(
            `http://localhost:${process.env.REACT_APP_SERVER_PORT}/posts`
        );

        try {
            setPosts(data);
        } catch (err) {
            console.log(err);}
        };
        try {
            fetchPosts();
        } catch (err) {
            console.log(err);}
    }, []);
    
    return (
        <div>
        <h1>All Posts</h1>
        {posts.map((post) => (
            <div key={post._id}>
            <h2>{post.topic}</h2>
            <p>{post.data}</p>
            <Link to={`/posts/${post._id}`}>See more</Link>
            </div>
        ))}
        </div>
    );
}

export default Posts;