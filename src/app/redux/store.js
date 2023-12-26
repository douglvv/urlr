import { configureStore } from '@reduxjs/toolkit'
import { linksReducer } from './linksSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
 

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, linksReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: thunk
})

export const persistor = persistStore(store)