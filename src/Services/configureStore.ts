import {
    configureStore,
    applyMiddleware,
} from "@reduxjs/toolkit";
import Config from '../Config'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "../Redux"
import rootSaga from "../Sagas"
// import { appNavigatorMiddleware } from '../Navigation/ReduxNavigation'
import Reactotron from './reactotron'
import persistConfig from "../Config/persist.config"
import { persistReducer, persistStore } from "redux-persist"
import rehydration from "./rehydration";

// creates the store
const createStore = (rootReducer:any, rootSaga:any) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  if (Config.useReactotron) {
    enhancers.push(Reactotron.createEnhancer())
  }
  //const store = createAppropriateStore(rootReducer, compose(...enhancers))
  const store = configureStore({
    reducer:rootReducer,
    middleware:middleware,
    enhancers:enhancers
  })

  if( Config.usePersist ) {
    rehydration.updateReducers(store)
  }
  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}

let finalReducers = rootReducer

if( Config.usePersist ) {
  const persistStore = persistConfig.store
  finalReducers = persistReducer(persistStore, rootReducer);
}

export const { store } = createStore(finalReducers, rootSaga)
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
