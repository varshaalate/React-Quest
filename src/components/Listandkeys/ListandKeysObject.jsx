import React from 'react'

const ListandKeysObject = () => {
    const user=[
        {id : 1 , name :"varsha"},
        {id : 2 , name : "sujal"}
    ]
  return (
    <div>
        <h1>List and Keys Map Objects</h1>
      <ul>
        {user.map((x) => 
        <li key={x.id}>{x.name}</li>
        )}
      </ul>
    </div>
  )
}

export default ListandKeysObject
