import React, { useState,useEffect } from 'react'
import axios from 'axios'
const View = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        viewdata();
    },[])
    const viewdata = async ()=>{
        const res=await axios.get('https://fsd-backendd-dsa.onrender.com/users');
        console.log(res);
        setUsers(res.data);
    }

  return (
    <div>
        <table style={{border: '2px solid red',backgroundColor:'greenyellow',width:'100%'}}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
      {
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
          </div>
        ))
      }
      </table>
    </div>
  )
}

export default View