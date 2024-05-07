import react from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import UserContextProvider from "./context/UserContectProvider"
import Private from "./page/Private/Private"
import Products from "./page/List/Products "


function App() {


  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>


        </Route>
        <Route path="/Products " element={<Products />} />
      </Routes>
    </UserContextProvider>

  )
}

export default App
