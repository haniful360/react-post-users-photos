import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1>Menu bar</h1>
            <nav>
                <a href="/users">Users</a>
                <a href="/posts">Post</a>
                <a href="/album">album</a>
                <a href="/photos">photos</a>
            </nav>
        </div>
    );
};

export default Header;