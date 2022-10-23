import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index () {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

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
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
