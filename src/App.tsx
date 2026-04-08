import "./App.css";
import { RoomProvider } from "./Features/Streaming/Context/ControlContext";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import { RegProvider } from "./Features/Auth/Contexts/RegContext";
import { LoginProvider } from "./Features/Auth/Contexts/LoginContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CalendarProvider } from "./Features/Calendar/Contexts/CalendarContext";
import { SettingProvider } from "./Features/Setting/Context/useSettingContext";
function App() {

  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SettingProvider>
        <CalendarProvider>
        <LoginProvider>
          <RegProvider>
            <RoomProvider>
            <RouterProvider router={router} />
            </RoomProvider>
          </RegProvider>
        </LoginProvider>
        </CalendarProvider>
        </SettingProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;