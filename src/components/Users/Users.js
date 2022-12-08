import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UserDetails from '../UserDetails/UserDetails';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>this is users: {users.length}</h1>
            <div>
                {users.map(user => (
                    <UserDetails key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default Users;