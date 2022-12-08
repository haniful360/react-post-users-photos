import React from 'react';

const UserDetails = ({user}) => {
    return (
        <div>
            <p key={user.id}>{user.name}</p>
        </div>
    );
};

export default UserDetails;