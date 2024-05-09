import react from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import UserContextProvider from "./context/UserContectProvider"
import Private from "./page/Private/Private"
import Products from "./page/List/Products "
import CardDetails from "./page/CardDetails/CardDetails"
import Nopage from "./page/Nopage"


function App() {


  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
        <Route path="details" element={<CardDetails />} />    
        <Route path="products" element={<Products />} />    
        </Route>      
        <Route path="/* " element={<Nopage />} />
      </Routes>
    </UserContextProvider>

  )
}

export default App
