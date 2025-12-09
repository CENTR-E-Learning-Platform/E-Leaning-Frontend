import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import { RegProvider } from "./Features/Auth/Contexts/RegContext";
import { LoginProvider } from "./Features/Auth/Contexts/LoginContext";
import { RoomProvider } from "./Features/Streaming/Context/ControlContext";

function App() {
  return (
    <>
   
       <LoginProvider>
        <RegProvider>
           <RoomProvider>
          <RouterProvider router={router} />
          </RoomProvider>
        </RegProvider>
      </LoginProvider>
    
     
    </>
  );
}

export default App;
