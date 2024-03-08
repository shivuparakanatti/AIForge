'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import {  store } from '../lib/store'
import { setUser } from '@/lib/features/userSlice'

export default function StoreProvider({ children }) {
 

  return <Provider store={store}>{children}</Provider>
}