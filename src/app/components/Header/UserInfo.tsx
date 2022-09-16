import { StyledComponent }          from "../styles"
import Person2Icon                  from '@mui/icons-material/Person2';
import { Link }                     from "react-router-dom";
import { CustomLink }               from "../CustomLink";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logOutUser }      from "../reducer/userreducer";
import { useState }                 from "react";
import Popover                      from "@mui/material/Popover";
import { Typography }               from "@mui/material";
import styled                       from "styled-components";

export const UserInfo = () => {
  const listOfUsers             = useSelector(getUser);
  const currentUser             = listOfUsers.find(user => (!!user.isLogged));
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch                = useDispatch();

  const open = Boolean(anchorEl);
  const id   = open ? 'simple-popover' : undefined;

  const handleClick = (event: any) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {   
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(logOutUser(currentUser));
    setAnchorEl(null);
  }
  
  return (
    <StyledComponent.UserDiv>
      {!!currentUser ? (
        <>      
          <Person2Icon 
            onClick={handleClick}
            aria-describedby={id}
            sx={{fontSize: 40, color: 'white', margin: 'auto', display: 'block'}}
            >           
            </Person2Icon>
            <StyledTypography onClick={handleClick} aria-describedby={id}>{[currentUser.userName,' ',currentUser.userSurname]}</StyledTypography>
        </>
      ) :
      (
      <>
        <Link to="/login">
          <Person2Icon
          sx={{fontSize: 40, color: 'white', margin: 'auto', display: 'block'}}
          >           
          </Person2Icon>
        </Link>
        <CustomLink to="/login" >Log In</CustomLink>
      </>
      )}  
      <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      >
        <PopoverDiv>
          <CustomLink to={`user/${currentUser?.login}`} key={currentUser?.login}>About me</CustomLink>
          <StyledButton onClick={handleLogOut}>Log Out</StyledButton>
        </PopoverDiv>
      </Popover>
    </StyledComponent.UserDiv>
  )
}

const PopoverDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #3a3636;
`
const StyledButton = styled.button`
  margin-top: 5px;
  background-color: #3a3636;
  color: white;
  border: 0px;
  text-decoration: underline;
  font-size: 15px;
  text-align: left;
  padding: 0px;
  :hover {
    cursor: pointer;
  }
`

const StyledTypography = styled(Typography)`

:hover {
  cursor: pointer;
}
`