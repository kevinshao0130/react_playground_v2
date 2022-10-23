import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Index = lazy(() => import('pages'))
const Test = lazy(() => import('pages/test'))

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/test' element={<Test />} />
    </Routes>
  )
}
