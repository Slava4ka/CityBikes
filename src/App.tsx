import React from 'react'
import './App.css'
import { Store } from 'redux'
import { ApplicationState } from './store'
import { Provider } from 'react-redux'
import MainPage from './pages/MainPage'

interface AppProps {
  store: Store<ApplicationState>
}

const App: React.FC<AppProps> = ({ store }: AppProps) => {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  )
}

export default App
