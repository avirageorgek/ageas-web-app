import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import {persistor, store} from './store.tsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <StrictMode>
          <Routes>
            <Route index element={<App />} />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
