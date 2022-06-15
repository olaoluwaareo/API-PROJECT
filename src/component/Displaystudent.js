import React from 'react'

export default function Displaystudent() {
  return (
    <>
     <div className='container col-sm-4 mt-5 shadow border-right'>
        <div className='row'>
          <div className=''>
          <h1 className='text-center'>Sign Up</h1>
              <input placeholder='first name' className='form-control my-2' onChange={(e)=>setfirstname(e.target.value)} value={firstName}/>
              <input placeholder='last name' className='form-control my-2' onChange={(e)=>setlastname(e.target.value)} value= {lastName}/>
              <input placeholder='email' className='form-control my-2' onChange={(e)=>setemail(e.target.value)} value = {email}/>
              <input placeholder='password' className='form-control my-2' onChange={(e)=>setpassword(e.target.value)} value = {password}/>
              <button onClick={registerStudent} className='btn btn-primary my-2'>Register</button>
              
          </div>
          
        </div>
    </div>
    </>
  )
}
