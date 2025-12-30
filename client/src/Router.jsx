import { Routes, Route } from 'react-router'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Admin/AdminDashboard'
import Home from './Components/Home/Home'
import PrivateRoutes from './PrivateRoutes'
import AdminRoutes from './AdminRoutes'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route element={<AdminRoutes allowedRole={'Admin'} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  )
}
export default Router
