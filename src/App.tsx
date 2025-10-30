import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import { RegProvider } from "./Features/Auth/Contexts/RegContext";
import { LoginProvider } from "./Features/Auth/Contexts/LoginContext";

function App() {
  return (
    <>
      <LoginProvider>
        <RegProvider>
          <RouterProvider router={router} />
        </RegProvider>
      </LoginProvider>
    </>
  );
}

export default App;
