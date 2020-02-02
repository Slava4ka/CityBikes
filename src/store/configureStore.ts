import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ApplicationState, reducer, rootSaga } from '.'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)
  return store
}
