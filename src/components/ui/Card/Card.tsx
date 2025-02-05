// import React, { useState } from 'react';

import Button from "../Button/Button";
import { CardArea, CardButton, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card.styles";

interface CardProps {
  title: string;
  description: string;
  footer: string;
  showButton?: boolean;
  buttonTitle?: string;
  buttonOnClick?: () => any;
}
const Card: React.FC<CardProps> = ({
  title, 
  description,
   footer, 
   showButton, 
   buttonTitle = '', 
   buttonOnClick
  }) => {
  return (
    <CardArea>
       <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description} </CardDescription>
      </CardHeader>
      <CardFooter>
        {footer}
      </CardFooter>
      <CardButton>
        {showButton &&(
          <Button title={buttonTitle} onClick={buttonOnClick}/>
        )}
      </CardButton>
    </CardArea>
  );
}

export default Card;

