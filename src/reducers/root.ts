import { handleActions } from 'redux-actions'
import { AnyAction } from 'redux'

const initState = () => ({
})

export default handleActions({
  ROOT_ACTION_TYPE (state, action: AnyAction) {
    return {
      ...state,
      ...action.data
    }
  }
}, initState())
