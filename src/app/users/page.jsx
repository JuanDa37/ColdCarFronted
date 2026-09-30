"use client";

import { useEffect, useState } from "react";

/*interface User {
    id: Number;
    username: String;
    email: String;
    phone: Number;
    date_age: String;
    role: String;
}*/

/*export default function UserPage(){
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch("http://localhost:8095/users/")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error(err));
    }, []);

}*/

export default function homeUser() {
  const [users, setUsers] = useState([]);

  const API_URL = "http://localhost:8095/usersdos";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Password</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Role2</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.role2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
