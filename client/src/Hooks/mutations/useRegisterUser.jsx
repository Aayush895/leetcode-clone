import { useMutation } from '@tanstack/react-query'
import { registerUser } from '../../Apis/AuthApis'
import useAuthStore from '../../Store/useAuthStore'

export function useRegisterUser() {
  const { setUserInfo } = useAuthStore()
  const registerMutationObj = useMutation({
    mutationFn: (userDetails) => registerUser(userDetails),
    onSuccess: (data) => {
      setUserInfo(data?.response)
    },
    onError: () => console.log('Error in registering the user!'),
  })

  return registerMutationObj
}
