import React, { useEffect } from 'react';


export default function ListUsers(props) {
  
  useEffect(() => {
    fetchUsers();
    // 
  }, []);

  const fetchUsers = () => {
    
  }

  return (
    <div>
      List Users
    </div>
  )
}