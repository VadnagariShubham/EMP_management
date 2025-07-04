import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Authprovider from './context/Authprovider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap App with Authprovider to provide context */}
     <Authprovider>
     <App />
     </Authprovider>
     
  
  </StrictMode>
);
