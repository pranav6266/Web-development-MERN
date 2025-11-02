import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from "./pages/Dashboard.jsx";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </StrictMode>,
)
