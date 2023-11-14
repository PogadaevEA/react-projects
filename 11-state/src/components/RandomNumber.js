import { useState } from 'react'
import generateRandomNumber from '../utils/RandomNumberGeneratorUtil'

function RandomNumber({ maxNum }) {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber(maxNum))

  const changeRandomNumber = () => {
    setRandomNumber(generateRandomNumber(maxNum))
  }

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={changeRandomNumber}>Generate random number</button>
    </div>
  )
}

export default RandomNumber
