import React from 'react';

const MyComponents = ({name,age}) => {
    // const {name} = props;
    return (
        <div>
            <h1>My name is: {name}</h1>
            <h1>My age is: {age}</h1>
        </div>
    );
};

export default MyComponents;