import Login from './pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { StateIterface } from './store/store';
import Panel from './components/ui/Panel/Panel';
import { LoggedContainer } from './App.styles';
import MenuNav from './components/ui/MenuNav/MenuNav';

const App = () => {
  const isLogged = useSelector((state: StateIterface) => state.login.isLogged)
  const dispatch = useDispatch();
  
  localStorage.setItem('teste_local_storage', 'larissa');

  function fazerLogin (){
    dispatch({type: 'login/SET_LOGIN'});
  }

  function loadEnv(){
    console.log('env SECRET_KEY:', process.env.REACT_APP_SECRET_KEY);
  }

  useEffect(() => {
    loadEnv()
  },[isLogged])

  return (    
    <div>
      {isLogged && (
        <LoggedContainer>
          	<MenuNav />
            <Panel />
        </LoggedContainer>
      )}
      {!isLogged && (
        <Login handleLoginClick={fazerLogin}/>
      )}
    </div>
  );
}

export default App;
