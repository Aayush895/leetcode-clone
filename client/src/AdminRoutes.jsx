import { Outlet } from 'react-router'
import { useVerifyCookie } from './Hooks/queries/useVerifyCookie'
import useAuthStore from './Store/useAuthStore'

function AdminRoutes({ allowedRole }) {
  const { userInfo } = useAuthStore()
  const data = useVerifyCookie()
  console.log(data)
  return data?.status == 200 && userInfo?.role == allowedRole && <Outlet />
}
export default AdminRoutes
