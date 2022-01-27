import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { Header } from './Header'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box mx="auto" mt="120px" maxW="container.md">
        {children}
      </Box>
    </>
  )
}
