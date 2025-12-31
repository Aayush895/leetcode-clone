import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import useAuthStore from './Store/useAuthStore'
import { useVerifyCookie } from './Hooks/queries/useVerifyCookie'

function PrivateRoutes() {
  const navigate = useNavigate()
  const { data, verifyAuth } = useVerifyCookie()
  const { isUserLoggedIn, isAdmin } = useAuthStore()

  useEffect(() => {
    // ✅ Only verify AFTER login state exists
    if (isUserLoggedIn) {
      verifyAuth()
    }
  }, [isUserLoggedIn, verifyAuth])

  useEffect(() => {
    if (!data) return

    if (!data?.response?.isCookieValid) {
      navigate('/login', { replace: true })
      return
    }

    if (data?.response?.isCookieValid && isAdmin) {
      navigate('/admin', { replace: true })
    } else {
      navigate('/home')
    }
  }, [data, isAdmin, navigate])

  return <Outlet />
}
export default PrivateRoutes

// samesite & secure in cookie --> Research
// enable attribute and refetch attribute in tanstack query --> Research
