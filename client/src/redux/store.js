import { configureStore,combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import jobslice from './jobslice'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  version: 1,
  storage

}
const rootReducer=combineReducers({user:userReducer,job:jobslice})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer:persistedReducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
})
export const persistor=persistStore(store)