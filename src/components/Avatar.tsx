import { Image } from '@chakra-ui/react'

import avatar from '../assets/avatar.png'

type AvatarProps = {
  src?: string
  name?: string
  size?: 'sm' | 'md'
}

export function Avatar({ src, name, size = 'md' }: AvatarProps) {
  return (
    <Image
      src={src || avatar}
      alt={name}
      width={48}
      height={48}
      h={size === 'sm' ? 8 : 12}
      w={size === 'sm' ? 8 : 12}
      rounded="full"
      objectFit="cover"
    />
  )
}
