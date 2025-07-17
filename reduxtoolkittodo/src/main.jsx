import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {store} from './app/store'
import { Provider } from 'react-redux'
import App from './App'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
