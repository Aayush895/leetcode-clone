import { Navigate, Outlet } from 'react-router'
import useAuthStore from './Store/useAuthStore'

function PrivateRoutes() {
  const { isUserLoggedIn } = useAuthStore()
  console.log('LOGGING LOGIN STATUS: ', isUserLoggedIn)
  return isUserLoggedIn ? <Outlet /> : <Navigate to={'/login'} />
}
export default PrivateRoutes
