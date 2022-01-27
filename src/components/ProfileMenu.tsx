import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList
} from '@chakra-ui/react'

import { useAuth } from '../hooks/useContext'

export function ProfileMenu() {
  const { user, logout } = useAuth()

  console.log(user)

  return (
    <Menu>
      <MenuButton as={Avatar} size="sm" cursor="pointer" name={user?.avatar} src={user?.avatar} />
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem
          onClick={logout}
          transition="all 0.2s ease-in-out"
          _hover={{ color: 'white', bg: 'red.500' }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
