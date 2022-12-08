import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PhotoDetails from '../PhotoDetails/PhotoDetails';

const Photos = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    return (
        <div>
            <h2>all show photos:{photos.length}</h2>
            <div>
                {
                    photos.map(photo => <PhotoDetails
                        key={photo.id}
                        photo={photo}
                    ></PhotoDetails>)
                }
            </div>
        </div>
    );
};

export default Photos;