import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreadCrumbArea, Container, LoginArea } from "./Header.styles";
import { DefaultTheme } from "../../theme/DefaultTheme";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const Header = () => {
	const dispatch = useDispatch();

	function doLogout(){
    dispatch({type: 'login/SET_LOGOUT'});
  }

	return (
		<Container>
			<BreadCrumbArea>
			Teste Breadcrumb 
			</BreadCrumbArea>
			<LoginArea> 
				<FontAwesomeIcon icon={faCircleUser} color={DefaultTheme.fontColor_2} onClick={doLogout}/>
			</LoginArea>
		</Container>
	);
}

export default Header;