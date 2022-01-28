import { IconButton } from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

type PaginationButtonProps = {
  direction: 'next' | 'previous'
  disabled: boolean
  onClick: () => void
}

export function PaginationButton({ direction, ...props }: PaginationButtonProps) {
  return (
    <IconButton
      w={8}
      h={8}
      bg="pink.500"
      color="white"
      _hover={{ bg: 'pink.600' }}
      transition="all 0.25s ease-in-out"
      icon={direction === 'next' ? <FiArrowRight /> : <FiArrowLeft />}
      aria-label={direction === 'next' ? 'Next page' : 'Previous page'}
      {...props}
    />
  )
}
