import React, { useState } from 'react'
import Login from './login/login'
import Register from './register/register'

export default function Auth() {
  const [isActive,setActive] = useState(false)
    return (
    <div className='flex flex-col items-center w-full justify-center gap-4 mt-4'>
      <div className='flex gap-4 p-4 bg-gray-400 justify-center'>
        <button className={ ` ${isActive ?  "border-b-2 border-gray-900" : ""} bg-green-500  text-white font-bold rounded-md py-1 px-3 `} onClick={()=>setActive(true)}>Login</button>
        <button className={`bg-blue-500 ${isActive ? "" : "border-b-2 border-gray-900"}  text-white font-bold rounded-md py-1 px-3 `} onClick={()=>setActive(false)}>Register</button>
      </div>
      <div>
        {isActive ? <Login/> : <Register/>}
      </div>
    </div>
  )
}
