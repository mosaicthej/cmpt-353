import React from 'react';
import { Link } from "react-router-dom";
import './Navigator.css';

function Navigator() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/create">Create</Link></li>
            </ul>
        </nav>
    );
}

export default Navigator;