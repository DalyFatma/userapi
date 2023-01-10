import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardUser from '../CardUser/CardUser';


function UserList() {
    const [UserList, setUserList] = useState([])
    const getListOfUseres=async()=>{
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUserList(response.data);
        } 
        catch (error) {
        console.error(error);
        }
    };
    useEffect(() => {
        getListOfUseres()
      }, [])
  return (
    <div>
    {UserList.map(el => (
      <CardUser key={el.id} user={el} />
    ))}
  </div>
);
  }

export default UserList