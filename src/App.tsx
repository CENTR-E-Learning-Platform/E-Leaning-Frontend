import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Routes'
import { RegProvider } from './Features/Auth/Contexts/RegContext'



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
