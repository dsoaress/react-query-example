import { Box, Flex, HStack } from '@chakra-ui/react'

import { useMetadata } from '../hooks/useContext'
import { Resources } from '../types/Resources'
import { PaginationButton } from './PaginationButton'
import { PaginationItem } from './PaginationItem'

type PaginationProps = {
  resource: Resources
}

export function Pagination({ resource }: PaginationProps) {
  const { page, setPage, totalPages } = useMetadata()

  return (
    <Box pos="fixed" bottom={0} left={0} right={0} bg="white">
      <Flex align="center" justify="space-between" maxW="container.md" mx="auto" py={8}>
        <Box w={110} fontSize="xs" fontWeight="bold" color="gray.500" textAlign="center">
          {page[resource]} of {totalPages[resource]}
        </Box>
        <HStack spacing={2}>
          <PaginationButton
            direction="previous"
            disabled={page[resource] === 1}
            onClick={() => setPage({ ...page, [resource]: page[resource] - 1 })}
          />

          {Array.from({ length: totalPages[resource] }, (_, i) => (
            <PaginationItem
              key={i}
              page={i + 1}
              currentPage={page[resource] === i + 1}
              onClick={() => setPage({ ...page, [resource]: i + 1 })}
            />
          ))}

          <PaginationButton
            direction="next"
            disabled={page[resource] === totalPages[resource]}
            onClick={() => setPage({ ...page, [resource]: page[resource] + 1 })}
          />
        </HStack>
      </Flex>
    </Box>
  )
}
