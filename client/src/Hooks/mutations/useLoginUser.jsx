import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../Apis/AuthApis'
import useAuthStore from '../../Store/useAuthStore'

export function useLoginUser() {
  const { setUserInfo } = useAuthStore()
  const mutationFunctionObj = useMutation({
    mutationFn: (userDetails) => loginUser(userDetails),
    onSuccess: (data) => {
      setUserInfo(data?.response)
    },
    onError: () => console.log('Error occured when logging the user'),
  })

  return mutationFunctionObj
}
