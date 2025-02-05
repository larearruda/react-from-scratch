import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { login, LoginState } from './loginReducer';

// Criando um unico interface para unir os interfaces principais da aplicação
export interface StateIterface {
  login: LoginState
}

const rootReducer = combineReducers({login});

// Criando a store principal com o reducer "root"
export const store = configureStore({
  reducer: rootReducer
});

export type AppState = ReturnType<typeof rootReducer>;