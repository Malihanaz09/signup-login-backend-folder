// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import AppRounter from './component/routers/route'
// import AppRounter from './component/routers/route'

import { Route, Routes } from "react-router-dom"
import SignUp from "./component/pages/signup"
import Login from "./component/pages/login"
import Home from "./component/pages/home"
import Profile from "./component/pages/profile"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <AppRounter />
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       {/* <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

function App(){
  return(
    <>
      {/* <AppRounter/> */}
   {/* <Routes>
    <Route path="/signup" element={ <SignUp/>}
   </Routes> */}
   {/* <SignUp/> */}
   <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="/signup" element={<SignUp/> }/>
    <Route path="/login" element={ < Login/> }/>
    <Route path="/profile" element={<Profile/>}/>
   </Routes>
    {/* <AppRounter/> */}
    </>
   
  )
}

export default App
