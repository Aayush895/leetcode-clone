import { useQuery } from '@tanstack/react-query'
import { verifyCookie } from '../../Apis/AuthApis'

export function useVerifyCookie() {
  const {
    data,
    refetch: verifyAuth,
    isFetched,
    isFetching,
  } = useQuery({
    queryKey: ['verifyCookie'],
    queryFn: verifyCookie,
    enabled: false,
    staleTime: 5 * 60 * 1000, // caching auth for 5 min
  })

  return { data, verifyAuth, isFetched, isFetching }
}
