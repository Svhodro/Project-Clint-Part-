import React, { useContext, useEffect } from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'

function Private() {
  const {user, setuser}=useContext(UserContext)
  const navigate=useNavigate()
  if (user === true) {
    return <Outlet />;
  } else {     
    useEffect(()=>{
       if(user===false){
        navigate('/')
       }
    }) 
      
  }
  
}

export default Private