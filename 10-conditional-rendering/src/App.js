import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo
        anymal="cat"
        name="Roxy"
        hasPet
      />
      <PetInfo
        anymal="dog"
        name="Rocket"
      />
    </div>
  )
}

export default App
