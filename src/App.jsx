import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './comp/TodoForm'
import { Provider } from 'react-redux'
import {store} from './App/store'
import Todos from './comp/Todos'

function App() {
  const [count, setCount] = useState(0)
  console.log(store)

  return (
    <Provider store={store}>
      <div>Todos</div>
      <TodoForm/>
      <Todos/>
    </Provider>
  )
}

export default App
