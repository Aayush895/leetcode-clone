import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../Apis/AuthApis'
import useAuthStore from '../../Store/useAuthStore'

export function useLoginUser() {
  const { setisAdmin, setUserInfo, setisUserLoggedIn } = useAuthStore()
  const mutationFunctionObj = useMutation({
    mutationFn: (userDetails) => loginUser(userDetails),
    onSuccess: (data) => {
      setisAdmin(data?.response?.role == 'Admin')
      setUserInfo(data?.response)
      setisUserLoggedIn(true)
    },
    onError: () => console.log('Error occured when logging the user'),
  })

  return mutationFunctionObj
}
