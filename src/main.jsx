import { StrictMode } from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { DataProviderFuncComp } from './context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    <DataProviderFuncComp>

      <App />
    </DataProviderFuncComp>
    </BrowserRouter>
  </StrictMode>,
)
