type Key = 'user' | 'page' | 'itemsPerPage' | 'totalPages' | 'filter'

export function setLocalStorage(key: Key, value: string | number | boolean | object) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getLocalStorage<T>(key: Key): T | undefined {
  const value = localStorage.getItem(key)
  if (!value) return undefined
  return JSON.parse(value)
}

export function removeLocalStorage(key: Key) {
  localStorage.removeItem(key)
}
