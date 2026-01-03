import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useVerifyCookie } from './Hooks/queries/useVerifyCookie'

function PrivateRoutes() {
  const navigate = useNavigate()
  const { data, verifyAuth } = useVerifyCookie()
  useEffect(() => {
    if (verifyAuth) {
      verifyAuth()
    }
  }, [verifyAuth])

  useEffect(() => {
    if (!data?.response?.isCookieValid) {
      navigate('/login', { replace: true })
      return
    }

    if (
      data?.response?.userInfo?.role == 'Admin' &&
      data?.response?.isCookieValid
    ) {
      navigate('/admin', { replace: true })
    } else {
      navigate('/home')
    }
  }, [data, navigate])

  return <Outlet />
}
export default PrivateRoutes

// samesite & secure in cookie --> Research
// enable attribute and refetch attribute in tanstack query --> Research
