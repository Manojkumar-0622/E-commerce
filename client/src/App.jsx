import { Outlet, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Layout from "./pages/Layout"
import { HomePage } from "./pages/HomePage"
import AllProducts from "./pages/AllProducts"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import ViewCard from "./components/CartDetailsPage/ViewCard"
import CheckOut from "./components/CartDetailsPage/CheckOut"
import FullItems from "./pages/FullItems"
import ContectPage from "./pages/ContectPage"

const App = () => {


  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/checkout" element={<CheckOut />}/>

      <Route path="/" element={<Layout />}>
          <Route index 
                 element={<HomePage />}/>

          <Route path="/shop" 
                 element={<div>Shop Page</div>}/>

          <Route path="/products" 
                 element = {<FullItems />}/>

          <Route path="/products/:id" 
                 element = {<ProductDetailsPage />}/>
                 
          <Route path="/blog/blogpage" 
                 element={<div>Blog Page</div>}/>

          <Route path="/blog/singleblog" 
                 element={<div>Single Blog</div>}/>

          <Route path="/contact" 
                 element={<ContectPage />}/>

          <Route path="/cart" element ={<ViewCard />} />

          <Route path="/allitem" element ={<FullItems />} />

      </Route>
      
    </Routes>
    </>
  )
}

export default App