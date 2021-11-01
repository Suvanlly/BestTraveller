import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import reducer from "./reducer"

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
}

const myPersistReducer = persistReducer(persistConfig, reducer)

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store)

export default store
