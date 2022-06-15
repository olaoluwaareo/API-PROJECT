import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {
    const navigate = useNavigate()
    const transfer = ()=>{
        alert("Tra")
        navigate("/")
    }
  return (
    <div>im a about
         <button>Transfer</button>
    </div>
   
  )
}

export default About