import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text inside wrapper</h2>
        <p>Some description</p>
        <input type="text" placeholder='Enter'/>
      </Wrapper>
    </div>
  )
}

export default App
