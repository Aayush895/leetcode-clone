import { useQuery } from '@tanstack/react-query'
import { verifyCookie } from '../../Apis/AuthApis'

export function useVerifyCookie() {
  const { data, refetch: verifyAuth } = useQuery({
    queryKey: ['verifyCookie'],
    queryFn: verifyCookie,
    enabled: false
  })

  return {data, verifyAuth}
}
