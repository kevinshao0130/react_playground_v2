import { useDispatch, useSelector } from 'react-redux'
import { setCommonData } from 'actions/common'
import { ReducerType } from 'reducers'

export default function Index () {
  const dispatch = useDispatch()
  const count = useSelector((state: ReducerType) => state.common.count)

  return (
    <div>
      <div>Index</div>
      <br />
      <p>{count}</p>
      <button onClick={() => dispatch(setCommonData({ count: count + 1 }))}>Increment</button>
      <button onClick={() => dispatch(setCommonData({ count: count - 1 }))}>Decrement</button>
    </div>
  )
}
