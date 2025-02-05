import React from 'react';
import { ButtonArea } from './Button.styles';

interface ButtonProps {
  title: string;
  onClick?: () => any;
}

const Button: React.FC<ButtonProps> = ({title, onClick}) => {
  return (
    <ButtonArea onClick={onClick}>
      {title}
    </ButtonArea>
  );
}

export default Button;
