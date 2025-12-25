import { Routes, Route } from 'react-router'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
export default Router
