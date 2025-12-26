import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../Apis/AuthApis'

export function useLoginUser() {
  const mutationFunctionObj = useMutation({
    mutationFn: (userDetails) => loginUser(userDetails),
    onSuccess: (data) =>
      console.log('User logged in successfully: ', data?.response),
    onError: () => console.log('Error occured when logging the user'),
  })

  return mutationFunctionObj
}
