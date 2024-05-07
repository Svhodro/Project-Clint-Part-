import react from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import UserContextProvider from "./context/UserContectProvider"



function App() {


  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>      
    </Routes>
    </UserContextProvider>

  )
}

export default App
