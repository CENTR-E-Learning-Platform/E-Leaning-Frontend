import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Components/Routes/Routes'
import { RegProvider } from './Components/Contexts/RegContext'



function App() {

  return (
    <>
    
      <RegProvider>
        <RouterProvider router={router}/>
      </RegProvider>
    
    </>
  )
}

export default App
