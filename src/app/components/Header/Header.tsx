import { StyledComponent } from "../styles"
import logos from "../img/logos.png"

import { MenuGames } from "./Menu";
import { UserInfo } from "./UserInfo";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
    <StyledComponent.HeaderDiv>
      <StyledComponent.HeaderWrapper>
        <Link to="/">
        <StyledComponent.LogoImg src={logos}/> 
        </Link>
        <MenuGames/>  
        <UserInfo/>
      </StyledComponent.HeaderWrapper>      
    </StyledComponent.HeaderDiv>

    </>
  );
};