import { useQuery } from '@tanstack/react-query'
import { verifyCookie } from '../../Apis/AuthApis'

export function useVerifyCookie() {
  const { data } = useQuery({
    queryKey: ['verifyCookie'],
    queryFn: verifyCookie,
  })

  return data
}
