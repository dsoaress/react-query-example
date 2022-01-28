import { Flex } from '@chakra-ui/react'

type PaginationItemProps = {
  page: number
  currentPage?: boolean
  onClick: () => void
}

export function PaginationItem({ page, currentPage, onClick }: PaginationItemProps) {
  return (
    <Flex
      align="center"
      justify="center"
      flexShrink={0}
      w={8}
      h={8}
      bg={currentPage ? 'pink.700' : 'pink.500'}
      _hover={{ bg: 'pink.600' }}
      transition="all 0.25s ease-in-out"
      color="white"
      rounded="md"
      fontSize="xs"
      fontWeight="bold"
      cursor="pointer"
      onClick={onClick}
    >
      {page}
    </Flex>
  )
}
