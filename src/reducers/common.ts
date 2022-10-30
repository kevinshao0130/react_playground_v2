import { handleActions } from 'redux-actions'
import { AnyAction } from 'redux'
import { Prop } from 'type'

export interface CommonReducerType extends Prop {
  count?: number
}

const initState = () => ({
  count: 0
})

export default handleActions({
  COMMON_INIT (state, action) {
    return {
      ...initState()
    }
  },
  COMMON_SET_DATA (state, action: AnyAction) {
    return {
      ...state,
      ...action.data
    }
  }
}, initState())
