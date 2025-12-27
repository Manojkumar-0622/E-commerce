import { Outlet, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Layout from "./pages/Layout"
import { HomePage } from "./pages/HomePage"
import AllProducts from "./pages/AllProducts"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>


      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="/products" element={<AllProducts />}/>
      </Route>
      
    </Routes>
    </>
  )
}

export default App