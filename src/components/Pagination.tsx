import { Box, Button, Flex } from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import { useMetadata } from '../hooks/useContext'
import { Resources } from '../types/Resources'

type PaginationProps = {
  resource: Resources
}

export function Pagination({ resource }: PaginationProps) {
  const { page, setPage, totalPages } = useMetadata()

  return (
    <Box pos="fixed" bottom={0} left={0} right={0} bg="white">
      <Flex justify="space-between" align="center" my={8} mx="auto" px={8} maxWidth="800px">
        <Button
          size="xs"
          leftIcon={<FiArrowLeft />}
          onClick={() => setPage(prev => ({ ...prev, [resource]: page[resource] - 1 }))}
          disabled={page[resource] === 1}
        >
          Previous page
        </Button>

        <Box w={110} fontSize="xs" fontWeight="bold" color="gray.500" textAlign="center">
          {page[resource]} of {totalPages[resource]}
        </Box>

        <Button
          size="xs"
          rightIcon={<FiArrowRight />}
          onClick={() => setPage(prev => ({ ...prev, [resource]: page[resource] + 1 }))}
          disabled={page[resource] === totalPages[resource]}
        >
          Next page
        </Button>
      </Flex>
    </Box>
  )
}
