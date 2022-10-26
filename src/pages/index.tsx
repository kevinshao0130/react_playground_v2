import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setRootData } from 'actions/root'

export default function Index () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const count = useSelector((state: any) => state.root.count)

  return (
    <div>
      <div>Index</div>
      <button
        onClick={() => {
          console.log('to test')
          navigate('test')
        }}
      >
        to test
      </button>
      <p>{count}</p>
      <button onClick={() => dispatch(setRootData({ count: count + 1 }))}>Increment</button>
      <button onClick={() => dispatch(setRootData({ count: count - 1 }))}>Decrement</button>
    </div>
  )
}
