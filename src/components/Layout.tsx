import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box mx="auto" maxW="container.md">
      {children}
    </Box>
  )
}
