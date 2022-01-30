import { IconButton, InputProps, InputRightElement, useDisclosure } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { Input } from './Input'

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Input
      ref={ref}
      label="Password"
      name="password"
      type={isOpen ? 'text' : 'password'}
      autoComplete="current-password"
      inputElement={
        <InputRightElement>
          <IconButton
            bg="transparent !important"
            variant="ghost"
            _focus={{ outline: 'none' }}
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onToggle}
          />
        </InputRightElement>
      }
      required
      {...props}
    />
  )
})

PasswordInput.displayName = 'PasswordInput'
