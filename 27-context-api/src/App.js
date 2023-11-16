import { useState } from 'react'
import './App.css'
import UserContext from './context/UserContext'
import User from './components/User'

function App() {
  const [user, setUser] = useState('Mike')
  return (
    <UserContext.Provider value={ user }>
      <div className="App">
        <User />
      </div>
    </UserContext.Provider>
  )
}

export default App
