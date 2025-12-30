import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { loginUser } from '../../Apis/AuthApis'
import useAuthStore from '../../Store/useAuthStore'

export function useLoginUser() {
  const navigate = useNavigate()
  const { setisAdmin, setUserInfo, setisUserLoggedIn } = useAuthStore()
  const mutationFunctionObj = useMutation({
    mutationFn: (userDetails) => loginUser(userDetails),
    onSuccess: (data) => {
      setisAdmin(data?.response?.role == 'Admin')
      setUserInfo(data?.response)
      setisUserLoggedIn(true)
      if (data?.response?.role == 'Admin') {
        navigate('/admin')
      } else {
        navigate('/home')
      }
    },
    onError: () => console.log('Error occured when logging the user'),
  })

  return mutationFunctionObj
}
