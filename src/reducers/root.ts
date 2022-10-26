import { handleActions } from 'redux-actions'
import { AnyAction } from 'redux'

const initState = () => ({
  count: 0
})

export default handleActions({
  ROOT_INIT (state, action) {
    return {
      ...initState()
    }
  },
  ROOT_ACTION_TYPE (state, action: AnyAction) {
    return {
      ...state,
      ...action.data
    }
  }
}, initState())
