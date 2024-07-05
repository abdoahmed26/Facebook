import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

function App() {
  // const dark = ()=>{
  //   document.querySelector("html").classList.toggle("dark")
  // }
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="SignIn" element={<SignIn/>} />
        <Route path="Home" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
