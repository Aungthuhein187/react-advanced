import axios from 'axios';
import React, { useEffect, useState } from 'react';

function User(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    }

    getUsers();
  });
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;
