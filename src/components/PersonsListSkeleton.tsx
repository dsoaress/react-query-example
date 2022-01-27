import { Skeleton } from '@chakra-ui/react'

type PersonsListSkeletonProps = {
  personsPerPage: number
}

export function PersonsListSkeleton({ personsPerPage }: PersonsListSkeletonProps) {
  return (
    <>
      {Array(personsPerPage)
        .fill(0)
        .map((_, i) => (
          <Skeleton height="80px" rounded={{ sm: 'lg' }} boxShadow="base" key={i} />
        ))}
    </>
  )
}
