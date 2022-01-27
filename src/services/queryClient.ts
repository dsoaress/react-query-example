import { del, get, set } from 'idb-keyval'
import { DehydratedState, QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { dehydrate, hydrate } from 'react-query/hydration'

type IndexedDBCache = {
  timestamp: number
  buster: string
  cacheState: DehydratedState
}

type Options = {
  indexedDBKey?: string
  throttleTime?: number
  maxAge?: number
  buster?: string
}

async function persistCache(
  queryClient: QueryClient,
  {
    indexedDBKey = 'APP',
    throttleTime = 1000,
    maxAge = 1000 * 60 * 60 * 24 * 7, // 7 days
    buster = ''
  }: Options = {}
) {
  if (typeof window !== 'undefined') {
    const saveCache = throttle(() => {
      const storageCache: IndexedDBCache = {
        buster,
        timestamp: Date.now(),
        cacheState: dehydrate(queryClient)
      }
      set(indexedDBKey, JSON.stringify(storageCache))
    }, throttleTime)

    queryClient.getQueryCache().subscribe(saveCache)
    const cacheStorage = await get(indexedDBKey)

    if (!cacheStorage) return

    const cache: IndexedDBCache = JSON.parse(cacheStorage)

    if (cache.timestamp) {
      const expired = Date.now() - cache.timestamp > maxAge
      const busted = cache.buster !== buster
      if (expired || busted) del(indexedDBKey)
      else hydrate(queryClient, cache.cacheState)
    } else del(indexedDBKey)
  }
}

function throttle(fn: () => void, throttleTime: number) {
  let timer: NodeJS.Timeout | null = null

  return () => {
    if (timer === null) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, throttleTime)
    }
  }
}

const queryCache = new QueryCache()
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
  }
})

persistCache(queryClient)

export { queryCache, queryClient, QueryClientProvider }
