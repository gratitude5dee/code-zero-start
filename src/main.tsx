
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "@fontsource/bebas-neue"
import { Toaster } from "./components/ui/toaster"

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
