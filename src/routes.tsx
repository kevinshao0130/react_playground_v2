import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Index = lazy(() => import('pages'))

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
  )
}
