import react from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Layout from "./page/Layout"


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/layout" element={<Layout/>}/>
    </Routes>

  )
}

export default App
