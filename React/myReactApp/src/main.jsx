import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Comp23 from "./Comp23.jsx";

// First class components were used because it was easy to manage state of component in class component.
// But later "hooks" were introduced to manage state in functional components.
// Now, functional components are used more, but class components are still in use.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp23 />
  </StrictMode>,
)
