// objeto de configuraçao do estado
export interface LoginState {
  isLogged: boolean;
}

const INITIAL_STATE: LoginState = {
  isLogged: false,
}

// actions disponíveis na entidade Login
enum ActionTypes {
  setLogIn = 'login/SET_LOGIN',
  setLogOut = 'login/SET_LOGOUT',
}

interface setLogIn {
  type: ActionTypes.setLogIn;
  payload: boolean;
}

interface setLogOut {
  type: ActionTypes.setLogOut;
  payload: boolean;
}

export type Action = setLogIn | setLogOut;

// reducer é  responsável por especificar como o estado da aplicação deve mudar em resposta a uma ação. 
export const login = (state = INITIAL_STATE, action: Action): LoginState => {
  switch (action.type) {
    case ActionTypes.setLogIn:
      return {...state, isLogged: true};

    case ActionTypes.setLogOut:
      return {...state, isLogged: false};

    default:
      return state;
  }
}



