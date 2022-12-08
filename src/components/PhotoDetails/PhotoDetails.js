import React from 'react';

const PhotoDetails = ({photo}) => {
    return (
        <div>
            <img src={photo.thumbnailUrl} alt="" />
        </div>
    );
};

export default PhotoDetails;