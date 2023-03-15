import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// import ProvideAuth from './Auth'
// import Child from './Child'
import ProvideAuth from './AuthAsync'
import Child from './ChildAsync'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProvideAuth>
      <div className="App">
        <Child />
      </div>
    </ProvideAuth>
  )
}

export default App
