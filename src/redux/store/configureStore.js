import {createStore} from 'redux';
import rootReducer from '../reducers';
import {persistStore, persistReducer} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: "userReducer",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, {});
const persistor = persistStore(store);

export {store, persistor}