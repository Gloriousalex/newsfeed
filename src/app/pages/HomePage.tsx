import { Button }           from "@mui/material";
import { useSelector }      from "react-redux";
import { Link }             from "react-router-dom";
import styled               from "styled-components";
import { BigNews }          from "../components/News/BigNews"
import { getUser }          from "../components/reducer/userreducer";
import { StyledComponent }  from "../components/styles"

export const HomePage = () => {
  const listOfUsers = useSelector(getUser);
  const currentUser = listOfUsers.find(user => (!!user.isLogged));

  return (
    <StyledComponent.HomePageWrapper>
      {currentUser?.isAdmin ? (<ButtonWrapper>
        <StyledLink to="/add_news"><StyledButton variant="outlined"> Add new news</StyledButton></StyledLink>
        </ButtonWrapper>
      ) : (<></>) }
      <BigNews/>
    </StyledComponent.HomePageWrapper>
  )
}

const StyledButton = styled(Button)` &&{
  margin-top: 15px;
  text-decoration: none;
  border: 2px solid rgba(25, 118, 210, 0.5);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-content: center;
`

const StyledLink = styled(Link)` &&{
  margin: auto;
}
`