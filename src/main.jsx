import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import counterStore from './Redux/CounterStore'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')).render(
  <StrictMode>


    <Provider store={counterStore}>
      <App/>
    </Provider>


    
   
    
    
  </StrictMode>,
)