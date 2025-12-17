import { Route, Routes } from "react-router-dom"
import HeroSection from "./pages/HeroSection"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import Register from "./components/Register"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>


      <Route path="/home" 
             element={
              <ProtectedRoute>
                 <HeroSection />
              </ProtectedRoute>
             }
             />

      

    </Routes>
    </>
  )
}

export default App