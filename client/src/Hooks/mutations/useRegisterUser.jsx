import { useMutation } from '@tanstack/react-query'
import { registerUser } from '../../Apis/AuthApis'

export function useRegisterUser() {
  const registerMutationObj = useMutation({
    mutationFn: (userDetails) => registerUser(userDetails),
    onSuccess: () => console.log('User registered successfully'),
    onError: () => console.log('Error in registering the user!'),
  })

  return registerMutationObj
}
