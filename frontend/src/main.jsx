import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.js'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
    <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    </StrictMode>
  // </BrowserRouter>,
)
