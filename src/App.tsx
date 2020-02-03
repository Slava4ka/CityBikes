import React from 'react'
import './App.css'
import { Store } from 'redux'
import { ApplicationState } from './store'
import { Provider } from 'react-redux'
import MainPage from './pages/MainPage'
import { Persistor } from 'redux-persist/es/types'
import { PersistGate } from 'redux-persist/integration/react'
import MySpinner from './components/common/MySpinner/MySpinner'

interface AppProps {
  store: Store<ApplicationState>
  persistor: Persistor
}

const App: React.FC<AppProps> = ({ store, persistor }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<MySpinner />} persistor={persistor}>
        <div className="App">
          <MainPage />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
