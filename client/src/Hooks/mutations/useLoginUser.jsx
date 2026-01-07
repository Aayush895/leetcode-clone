import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../Apis/AuthApis'
import useAuthStore from '../../Store/useAuthStore'
import { useNavigate } from 'react-router'

export function useLoginUser() {
  const navigate = useNavigate()
  const { setUserInfo } = useAuthStore()
  const mutationFunctionObj = useMutation({
    mutationFn: (userDetails) => loginUser(userDetails),
    onSuccess: (data) => {
      setUserInfo(data?.response)
      if (data?.response?.role == 'Admin') {
        navigate('/admin', { replace: true })
      } else {
        navigate('/home', { replace: true })
      }
    },
    onError: (error) => {
      console.log('Error occured when logging the user:', error)
      navigate('/login')
    },
  })

  return mutationFunctionObj
}
