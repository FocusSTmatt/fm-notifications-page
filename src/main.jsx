import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App1 from './App1.jsx'
import { RecoilRoot } from 'recoil'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <React.StrictMode>
      <App1 />
    </React.StrictMode>,
  </RecoilRoot>
  
)
