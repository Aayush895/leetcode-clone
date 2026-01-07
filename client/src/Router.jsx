import { Routes, Route } from 'react-router'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Admin/AdminDashboard'
import Home from './Components/Home/Home'
import ProtectedRoutes from './ProtectedRoutes'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes allowedRoles={['Admin', 'User']} />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  )
}
export default Router
