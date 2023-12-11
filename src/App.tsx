import './App.css'
import AppContext from './context/app.context'
import AppRouter from './router'

function App() {

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <AppContext>
        <AppRouter/>
      </AppContext>
    </div>
  )
}

export default App
