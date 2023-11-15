import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'

const texts = [
  'Click here',
  'Click and here',
  'Click or heree',
  'Or skip',
  'do',
]

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount(count + 1)
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return (
          <Button
            onClick={incrementCount}
            text={text}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default App
