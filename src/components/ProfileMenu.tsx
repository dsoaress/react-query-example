import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'

import { useAuth } from '../hooks/useContext'
import { Avatar } from './Avatar'

export function ProfileMenu() {
  const { user, logout } = useAuth()

  return (
    <Menu>
      <MenuButton size="sm" cursor="pointer" border="2px" borderColor="pink.600" rounded="full">
        <Avatar src={user?.avatar} name={user?.name} size="sm" />
      </MenuButton>
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
