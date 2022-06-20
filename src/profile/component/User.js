import React from 'react';

const User = (props) => {
    console.log(props)
  return (
  <div>
       <button onClick={() => props.alertMyInput(`My name is Amani Trabelsi `)}>
     Discover
   </button>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmvLrxWNV-kulFp6WQI4d0zjeuAKLBAC_7g&usqp=CAU'></img>
    <h1>
    Full Name : Amani Trabelsi
      </h1>

      <h1>
    Bio:React
      </h1>

      <h1>
   Profession : Student 
      </h1>

    </div>
  
  )
}
export default User