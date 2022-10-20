import { combineReducers } from '@reduxjs/toolkit'

import root from './root'

const createRootReducer = combineReducers({
  root
})

export interface ReducerType {
  root: any
}

export default createRootReducer
