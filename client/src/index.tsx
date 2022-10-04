import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";


const root = createRoot(document.getElementById('root')! as HTMLElement);
root.render(
  <StrictMode>
  <BrowserRouter basename='/'>
    <App/>
  </BrowserRouter>
  </StrictMode>
);