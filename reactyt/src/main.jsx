import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './ApiAndAxios'
// import App from './formhandling.jsx'
// import App from './fragments'
// import App from './component'
// import App from './DataPass.jsx'
// import App from './Datapasswithmap.jsx'
// import App from './comtocomdata.jsx'
// import App from './ReactRouterDome'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/Usercontext'

createRoot(document.getElementById('root')).render(
  
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>

    <UserContext>
        <App />
    </UserContext>
  
)
