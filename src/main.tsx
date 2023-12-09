import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import { themeGlobal } from './theme/theme.global.ts'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MantineProvider theme={themeGlobal}>
          <App />
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
