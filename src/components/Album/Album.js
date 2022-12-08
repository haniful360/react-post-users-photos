import React, { useEffect } from 'react';
import { useState } from 'react';
import AlbumDetails from '../AlbumDetails/AlbumDetails';

const Album = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setAlbums(data))
    },[])
    return (
        <div>
            <h2>this is album:{albums.length}</h2>
            <div>
                {
                    albums.map(album => <AlbumDetails
                    key ={album.id}    
                    album ={album}
                    ></AlbumDetails>)
                }
            </div>
        </div>
    );
};

export default Album;