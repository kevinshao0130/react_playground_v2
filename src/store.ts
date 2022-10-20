import { AnyAction } from 'redux'
import { Action } from 'redux-actions'
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import createRootReducer, { ReducerType } from 'reducers'

export type DispatchType = ThunkDispatch<ReducerType, void, AnyAction>

const reducer = (state: ReducerType, action: Action<{}>) => {
  return createRootReducer(state, action)
}

export default configureStore({ reducer, middleware: [thunkMiddleware] })
