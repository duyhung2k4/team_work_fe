import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { Notifications } from "@mantine/notifications";
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
          <Notifications position="top-right" />
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
