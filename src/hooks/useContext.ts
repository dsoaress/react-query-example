import { useContext as useReactContext } from 'react'

import { AuthContext } from '../contexts/Auth'
import { MetadataContext } from '../contexts/Metadata'

export const useAuth = () => useReactContext(AuthContext)
export const useMetadata = () => useReactContext(MetadataContext)
