'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMemo } from 'react'

type ProvidersProps = {
  children: React.ReactNode
}

export default function Providers({ children }: Readonly<ProvidersProps>) {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
    []
  )
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
