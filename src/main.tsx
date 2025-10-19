// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {GoogleOAuthProvider} from "@react-oauth/google";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
   <GoogleOAuthProvider clientId="623877348287-knb7rgvqpn5ilhjc2f0c4h4u43bk918q.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
)
