import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './contexts/Auth'
import { MetadataProvider } from './contexts/Metadata'
import { PrivateRoutes } from './routes/private.routes'
import { PublicRoutes } from './routes/public.routes'
import { RedirectRoutes } from './routes/redirects.routes'
import { queryClient, QueryClientProvider } from './services/queryClient'

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <AuthProvider>
            <MetadataProvider>
              <PublicRoutes />
              <RedirectRoutes />
              <PrivateRoutes />
            </MetadataProvider>
          </AuthProvider>
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
