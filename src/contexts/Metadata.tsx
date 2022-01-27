import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

import { Resources } from '../types/Resources'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

type Page = { [key in Resources]: number }
type SetPage = Dispatch<SetStateAction<Page>>
type PersonsPerPage = { [key in Resources]: number }
type TotalPages = { [key in Resources]: number }
type SetTotalPages = Dispatch<SetStateAction<TotalPages>>
type SetPersonsPerPage = Dispatch<SetStateAction<PersonsPerPage>>
type Filter = { [key in Resources]: { sort: string; order: string } }
type SetFilter = Dispatch<SetStateAction<Filter>>

type MetadataContextProps = {
  page: Page
  setPage: SetPage
  personsPerPage: PersonsPerPage
  setPersonsPerPage: SetPersonsPerPage
  totalPages: TotalPages
  setTotalPages: SetTotalPages
  filter: Filter
  setFilter: SetFilter
}

type MetadataProviderProps = {
  children: ReactNode
}

export const MetadataContext = createContext({} as MetadataContextProps)

const metadataDefaultValues = {
  page: { students: 1, professors: 1 },
  personsPerPage: { students: 10, professors: 10 },
  totalPages: { students: 1, professors: 1 },
  filter: {
    students: { sort: 'name', order: 'asc' },
    professors: { sort: 'name', order: 'asc' }
  }
}

export function MetadataProvider({ children }: MetadataProviderProps) {
  const [page, setPage] = useState(metadataDefaultValues.page)
  const [personsPerPage, setPersonsPerPage] = useState(metadataDefaultValues.personsPerPage)
  const [totalPages, setTotalPages] = useState(metadataDefaultValues.totalPages)
  const [filter, setFilter] = useState(metadataDefaultValues.filter)

  useEffect(() => {
    const localStoragePage = getLocalStorage<Page>('page')
    const localStoragePersonsPerPage = getLocalStorage<PersonsPerPage>('PersonsPerPage')
    const localStorageTotalPages = getLocalStorage<TotalPages>('totalPages')
    const localStorageFilter = getLocalStorage<Filter>('filter')

    if (localStoragePage) setPage(localStoragePage)
    if (localStoragePersonsPerPage) setPersonsPerPage(localStoragePersonsPerPage)
    if (localStorageTotalPages) setTotalPages(localStorageTotalPages)
    if (localStorageFilter) setFilter(localStorageFilter)
  }, [])

  useEffect(() => {
    setLocalStorage('page', page)
    setLocalStorage('PersonsPerPage', personsPerPage)
    setLocalStorage('totalPages', totalPages)
    setLocalStorage('filter', filter)
  }, [filter, personsPerPage, page, totalPages])

  const value = {
    page,
    setPage,
    personsPerPage,
    setPersonsPerPage,
    totalPages,
    setTotalPages,
    filter,
    setFilter
  }

  return <MetadataContext.Provider value={value}>{children}</MetadataContext.Provider>
}
