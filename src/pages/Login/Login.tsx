import React from 'react';
import Card from '../../components/ui/Card/Card';
import { Container } from './Login.styles';

interface LoginProps {
  handleLoginClick: () => any;
}

const Login: React.FC<LoginProps> = ({handleLoginClick}) => {
    function onClickLogin(){
      handleLoginClick();
    };
   

    return (
    <Container>
        <Card
          title='titulo por props'
          description='description pelas props'
          footer='footer pelas props'
          showButton={true}
          buttonTitle='fazer login'
          buttonOnClick={onClickLogin}
         />
    </Container>
  );
}

export default Login;
