import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './contexts/Auth'
import { MetadataProvider } from './contexts/Metadata'
import { Routes } from './routes'
import { queryClient, QueryClientProvider } from './services/queryClient'

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <AuthProvider>
            <MetadataProvider>
              <Routes />
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
