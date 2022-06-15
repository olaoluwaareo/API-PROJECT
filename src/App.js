import React from 'react'
import { useState,useEffect} from 'react'
import axios from "axios"

import flip0 from '../src/flip/image/flip.jpg'
import flip11 from '../src/flip/image/flip1.jpg'
import flip12 from '../src/flip/image/flip2.jpg'
import flip13 from '../src/flip/image/flip3.jpg'
import flip14 from '../src/flip/image/flip4.jpg'
import flip15 from '../src/flip/image/flip5.jpg'
import flip16 from '../src/flip/image/flip6.jpg'
import flip17 from '../src/flip/image/flip7.jpg'
import flip18 from '../src/flip/image/flip8.jpg'
import flip19 from '../src/flip/image/flip9.jpg'
import flip20 from '../src/flip/image/flip10.jpg'
import flip21 from '../src/flip/image/flip11.jpg'
import flip23 from '../src/flip/image/movie1.jpg'
import flip24 from '../src/flip/image/movie11.jpeg'
import flip25 from '../src/flip/image/movie111.jpg'

// import flip11 from '../src/flip/image/flip0.jpeg'

import bootstrap from 'bootstrap'
// import flip from 'flip'

function App() {
  const [allMovie, setallMovie] = useState([])
  useEffect(()=>{
    movie()
  },[])

  const API = "https://imdb-api.com/API/Youtube/k_dekqhm6t/8hP9D6kZseM"
  const movie = ()=>{
      axios.get(API).then((res)=>{
        console.log(res);
        setallMovie(res.data.videos)
      }).catch((err)=>{
        console.log(`error`);
        console.log(err);
      })
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-primary" href="#">MonGO Movie</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Movie</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#" >Stream Live</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               TV Show
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                 <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item ms-5 text-center">
              <a className="nav-link text-danger" href="#"> Live Video</a>
            </li>
           
          </ul>
          
          <form className="d-flex">
          <button className="btn btn-outline-primary" type="submit">Search</button>
          
            <input className="form-control me-2 ms-3" type="search" placeholder="Search your movi....." aria-label="Search"/>
        
          </form>
        </div>
      </div>
     
    </nav>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" id='num1'>
      <img src={flip23} class="d-block w-100 h-50" alt="..."/>
    </div>
    <div class="carousel-item" id='num3'>
       <img src={flip24} class="d-block w-100 h-50"  alt="..."/> 
    </div>
    <div class="carousel-item" id='num4'>
      <img src={flip25} class="d-block w-100 h-50" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <div className=''>

        <div className='text-danger pt-5 ps-5'>Prev</div>
  </div>
  
    <div class="all">
            <h4>Horizontal Flip</h4>
            <section id="container">
                <div id="flip-card">
                    <div id="flip">
                        <div id="front">
                            <img src={flip0} alt=""/>
                            <h1 class="text-shadow">ASSASSING CREED </h1>
                        </div>
                        <div id="back">
                            <h2>Story</h2>
                            <p>Assassin's Creed is an open-world action-adventure stealth video game franchise published by Ubisoft and developed mainly by its studio Ubisoft Montreal....</p>
                            <p>Assassin's Creed is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It is the first installment in the Assassin's Creed series. The game was released for PlayStation 3 and Xbox 360 in November 2007.</p>
                        </div>
                    </div>
                </div>
                <div id="flip-card">
                    <div id="flip">
                        <div id="front">
                            <img src={flip11} alt=""/>
                            <h1 class="text-shadow">WAR 3</h1>
                        </div>
                        <div id="back">
                            <h2>Story</h2>
                            <p>In the eighteen months after the flooding of Jacinto, the human survivors have moved to the island of Vectes and have started to rebuild. After a generally ...</p>
                            <p>Two years after the end of The Locust War with the entire civilization scattered and many casualties. While Dom is suffering with suicide thoughts after</p>
                        </div>
                    </div>
                </div>
                <div id="flip-card">
                    <div id="flip">
                        <div id="front">
                            <img src={flip12} alt=""/>
                            <h1 class="text-shadow">BATTLE FIELD 3</h1>
                        </div>
                        <div id="back">
                            <h2>Story</h2>
                            <p>The campaign of DICE's Star Wars Battlefront II follows the story of Imperial Commander Iden Versio and her team, Inferno Squad, as they fight for the future of the Galactic Empire. The campaign takes place between Return of the Jedi and The Force Awakens...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="container">
                <div id="flip-cards">
                    <div id="flips">
                        <div id="fronts">
                            <img src={flip13} alt=""/>
                            <h1 class="text-shadow">VALLEY</h1>
                        </div>
                        <div id="backs">
                            <h2>Story</h2>
                            <p>Story Valley uses visual, audio, and digital materials to help reinterpret student stories by combining oral history and innovative, creative literacy ...</p>
                        </div>
                    </div>
                </div>
                <div id="flip-cards">
                    <div id="flips">
                        <div id="fronts">
                            <img src={flip14} alt=""/>
                            <h1 class="text-shadow">MASS-3</h1>
                        </div>
                        <div id="backs">
                            <h2>Story</h2>
                            <p>Zillow has 15 homes for sale in Boston MA matching Two Story. View listing photos, review sales history, and use our detailed real estate filters to find ...</p>
                        </div>
                    </div>
                </div>
                <div id="flip-cards">
                    <div id="flips">
                        <div id="fronts">
                            <img src={flip15} alt=""/>
                            <h1 class="text-shadow">BAT-MAN</h1>
                        </div>
                        <div id="backs">
                            <h2>Story</h2>
                            <p>After witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne as a child, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="container">
                <div id="flip-cards">
                    <div id="flips">
                        <div id="fronts">
                            <img src={flip16} alt=""/>
                            <h1 class="text-shadow">COW-BOY</h1>
                        </div>
                        <div id="backs">
                            <h2>Story</h2>
                            <p>Young men fresh from battle, trained in firearms, independent, and seeking adventure, crossed the Mississippi and left the war behind them. They rounded up the ...</p>
                        </div>
                    </div>
                </div>
                <div id="flip-cards">
                    <div id="flips">
                        <div id="fronts">
                            <img src={flip17} alt=""/>
                            <h1 class="text-shadow">ALIIEN V GLAD</h1>
                        </div>
                        <div id="backs">
                            <h2>Story</h2>
                            <p>Young men fresh from battle, trained in firearms, independent, and seeking adventure, crossed the Mississippi and left the war behind them. They rounded up the ...</p>
                        </div>
                    </div>
                </div>
                <div id="flip-cards">
                    <div id="flips">
                        <div id="fronts">
                            <img src={flip18} alt=""/>
                            <h1 class="text-shadow">TOMB RAIDER</h1>
                        </div>
                        <div id="backs">
                            <h2>Story</h2>
                            <p>A new intense and gritty origin story of Lara Croft and her ascent from a frightened young woman to a hardened survivor. Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="container">
                <div id="flip-cards">
                    <div id="flips">
                        <div id="fronts">
                            <img src={flip19} alt=""/>
                            <h1 class="text-shadow">BATTLE_FIELD 3</h1>
                        </div>
                        <div id="backs">
                            <h2>Story</h2>
                            <p>Battlefield 3's Campaign story is set during the fictional "War of 2014" and covers events that occur over the span of nine months. Most of the story takes place in the Iran–Iraq region. Other locations include the Iranian-Azerbaijani border, Paris, and New York City...</p>
                        </div>
                    </div>
                </div>
                <div id="flip-cards">
                    <div id="flips">
                        <div id="fronts">
                            <img src={flip20} alt=""/>
                            <h1 class="text-shadow">DEAD SPACE</h1>
                        </div>
                        <div id="backs">
                            <h2>Story</h2>
                            <p>The third and final main entry in the Dead Space series, the story follows series Isaac Clarke and his allies as they explore the planet Tau Volantis to discover the origins of the growing Necromorph threat...</p>
                        </div>
                    </div>
                </div>
                <div id="flip-cards">
                    <div id="flips">
                        <div id="fronts">
                            <img src={flip21} alt=""/>
                            <h1 class="text-shadow">DEUS EX HUM REVOLU</h1>
                        </div>
                        <div id="backs">
                            <h2>Story</h2>
                            <p>Deus Ex: Human Revolution is set in 2027, just as human augmentation begins to enter mainstream life. These mechanical augmentations act as ...</p>
                        </div>
                    </div>
                </div>
               
            </section>
           
        </div>
 {
  allMovie.map((vid)=>(
    <video src={vid.url} controls loop/>
  ))
} 



    </>
  )
}
export default App 



// // import { Button } from 'bootstrap'
// import React, { useState } from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import Button  from './component/Button'
// import About from './pages/About'
// import Home from './pages/Home'
// import NavBar from './component/NavBar'
// import NotFound from './component/NotFound'
// import MoreDetails from './component/MoreDetails'
// import Product from './component/Product'


// function App (){
  
//    const [firstName, setfirstname] = useState("")
//    const [lastName, setlastname] = useState("")
//    const [password, setpassword] = useState("")
//    const [email, setemail] = useState("")
//    const [allStudents, setallStudents] = useState([])

//   const registerStudent =()=>{
//     let newStudents = {firstName,lastName,email,password}
//     let newAllStudent = [...allStudents,newStudents]
//     setallStudents(newAllStudent)
//     setfirstname("") 
//     setlastname("")
//     setemail("")
//     setpassword("")
//   }
  
//   {
    
//   }
//   // const [myNumber, setmyNumber] = userState(0)
//   // const [random, setrandomNumb] =
//   // const App=()=> {
 
//   return (
//     <>
//     <NavBar/>
//     {/* <NotFound/> */}

//       <Routes>
//         <Route path='/'element={<Home/>}/>
//         <Route path="home" element={<Navigate to="/"/>}/>
//         <Route path='/about'element={<About/>}/>
//         <Route path='/about/:id'element={<MoreDetails/>}/>
//         {/* <Route path='/products/*' element= {<Product/>}> */}
//         <Route path='*'element={<NotFound/>}/>
//       </Routes>
    
//     {/* <div className='container col-sm-4 mt-5 shadow border-right'>
//         <div className='row'>
//           <div className=''>
//           <h1 className='text-center'>Sign Up</h1>
//               <input placeholder='first name' className='form-control my-2' onChange={(e)=>setfirstname(e.target.value)} value={firstName}/>
//               <input placeholder='last name' className='form-control my-2' onChange={(e)=>setlastname(e.target.value)} value= {lastName}/>
//               <input placeholder='email' className='form-control my-2' onChange={(e)=>setemail(e.target.value)} value = {email}/>
//               <input placeholder='password' className='form-control my-2' onChange={(e)=>setpassword(e.target.value)} value = {password}/>
//               <button onClick={registerStudent} className='btn btn-primary my-2'>Register</button>
              
//           </div>
          
//         </div>
//     </div> */}
//     <div className='container shadow col-4' >
//     <h1 className='text-center'>AllStudents</h1>
//     <table className='table'>
//       <tr>
//         <td>S/N</td>
//         <td>Firstname</td>
//         <td>Lastname</td>
//         <td>Email</td>
//         <td>Action</td>
//       </tr>
//     {
//       allStudents.map((student, index)=>(
//         <tr>
//           <td>{index+1}</td>
//           <td>{student.firstName}</td>
//           <td>{student.lastName}</td>
//           <td>{student.email}</td>
//            <td>
//             <button className='btn-dark' >
//               Del
//             </button>
//           </td>
//             <td><button className='btn-dark '>
//               Del
//             </button>
//             </td> 
//         </tr>
//         // <h3>{student.firstName}</h3>
//       ))
//     }
//     </table>
    
//     </div>
//     </>
//   )
// }

// export default App
// //interpolation = {} 
// //fragment = <>-</>