import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useVerifyCookie } from './Hooks/queries/useVerifyCookie'
import useAuthStore from './Store/useAuthStore'

function ProtectedRoutes({ allowedRoles }) {
  const navigate = useNavigate()
  const { data, verifyAuth, isFetching, isFetched } = useVerifyCookie()
  const { setUserInfo } = useAuthStore()
  useEffect(() => {
    if (verifyAuth) {
      verifyAuth()
    }
  }, [verifyAuth])

  useEffect(() => {
    if (!isFetched || isFetching) return
    if (!data?.response?.isCookieValid) {
      navigate('/login', { replace: true })
      return
    }

    if (
      data?.response?.userInfo?.role == allowedRoles[0] &&
      data?.response?.isCookieValid
    ) {
      navigate('/admin', { replace: true })
    } else {
      navigate('/home')
    }

    setUserInfo(data?.response?.userInfo)
  }, [data, navigate, isFetching, isFetched])

  return <Outlet />
}
export default ProtectedRoutes

// samesite & secure in cookie --> Research
// enable attribute and refetch attribute in tanstack query --> Research
