
import React, { useContext, useState } from 'react';
import { Authcontext } from '../context/AuthProvider';




const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
     localStorage.setItem('loggedInUser','');
     props.changeUser('')
    //  window.location.reload();
  }
 
  return (
    <div className='flex  items-end justify-between'>
        <h1 className='text-2xl font-medium'>HELLO , <br /> <span className='font-semibold text-3xl'>Username</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-white text-lg px-2 py-1 rounded'>Log Out</button>
    </div>
  )
}

export default Header