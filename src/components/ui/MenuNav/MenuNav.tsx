import { MenuArea, Nav, NavItem } from "./MenuNav.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'
import { DefaultTheme } from "../../theme/DefaultTheme";


const MenuNav = () => {
  return (
    <MenuArea> 
      <Nav>
        <NavItem>
          <FontAwesomeIcon icon={faUser} color={DefaultTheme.fontColor_2}/>
          <FontAwesomeIcon icon={faUser} color={DefaultTheme.fontColor_2}/>
          <FontAwesomeIcon icon={faUser} color={DefaultTheme.fontColor_2}/>
          <FontAwesomeIcon icon={faUser} color={DefaultTheme.fontColor_2}/>  
          
        </NavItem>
      </Nav>
    </MenuArea>
  );
  }

export default MenuNav;
