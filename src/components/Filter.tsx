import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import { useMetadata } from '../hooks/useContext'
import { Resources } from '../types/Resources'

type FilterProps = {
  resource: Resources
}

export function Filter({ resource }: FilterProps) {
  const { filter, setFilter, personsPerPage, setPersonsPerPage } = useMetadata()

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={IconButton} aria-label="Options" icon={<FiMenu />} variant="outline" />
      <MenuList minWidth="240px">
        <MenuOptionGroup
          defaultValue={filter[resource].sort}
          title="Sort by"
          type="radio"
          onChange={value =>
            setFilter({
              ...filter,
              [resource]: {
                order: filter[resource].order,
                sort: value
              }
            })
          }
        >
          <MenuItemOption value="name">Name</MenuItemOption>
          <MenuItemOption value="desc">Registration date</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup
          defaultValue={filter[resource].order}
          title="Order by"
          type="radio"
          onChange={value =>
            setFilter({
              ...filter,
              [resource]: {
                sort: filter[resource].sort,
                order: value
              }
            })
          }
        >
          <MenuItemOption value="asc">Ascending</MenuItemOption>
          <MenuItemOption value="desc">Descending</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup
          defaultValue={personsPerPage[resource].toString()}
          title="Persons per page"
          type="radio"
          onChange={value =>
            setPersonsPerPage({
              ...personsPerPage,
              [resource]: +value
            })
          }
        >
          {[10, 15, 20, 25].map(personsPerPage => (
            <MenuItemOption key={personsPerPage} value={personsPerPage.toString()}>
              {personsPerPage}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
