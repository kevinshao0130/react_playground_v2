import { combineReducers } from '@reduxjs/toolkit'

import common, { CommonReducerType } from './common'

const createRootReducer = combineReducers({
  common
})

export interface ReducerType {
  common: CommonReducerType
}

export default createRootReducer
