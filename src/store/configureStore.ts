import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ApplicationState, reducer, rootSaga } from '.'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import { Persistor } from 'redux-persist/es/types'

interface ConfigureStoreReturn {
  store: Store<ApplicationState>
  persistor: Persistor
}

export default function configureStore(): ConfigureStoreReturn {
  const composeEnhancers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  const persistor = persistStore(store)
  return { store, persistor }
}
