import React from 'react'

const ListAndKeys = () => {

    const list = ['apple' , 'orange' , 'guava']
  return (
    <div>
         <h1>List and Keys Map List</h1>

      <ul>
        {list.map((x , index) =>(
            <li key={index}>{x}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListAndKeys
