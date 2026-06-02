import React from 'react'

function Card( ) {

  const userdata = [
    {
      "id": 1,
      "username": "admin_nurlan",
      "email": "nurlan@example.com",
      "role": "admin",
      "isActive": true,
      "joinedDate": "2026-01-15"
    },
    {
      "id": 2,
      "username": "dev_elvin",
      "email": "elvin@example.com",
      "role": "moderator",
      "isActive": true,
      "joinedDate": "2026-02-10"
    },
    {
      "id": 3,
      "username": "user_aysel",
      "email": "aysel@example.com",
      "role": "user",
      "isActive": false,
      "joinedDate": "2026-03-05"
    },
    {
      "id": 4,
      "username": "coder_kenan",
      "email": "kenan@example.com",
      "role": "user",
      "isActive": true,
      "joinedDate": "2026-04-20"
    },
    {
      "id": 5,
      "username": "designer_leyla",
      "email": "leyla@example.com",
      "role": "user",
      "isActive": true,
      "joinedDate": "2026-05-12"
    }
  ]
  return (
    <>
    

      
      

      {
      userdata.map(item => 
          <div key={item.id}>
            <h1>{item.username}</h1>
            <p>{item.email}</p>
            <h4>{item.isActive}</h4>
          </div>
        )
      }
    
      
    </>
  )
}

export default Card