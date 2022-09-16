import { useSelector } from "react-redux";
import styled from "styled-components"
import { getUser } from "../components/reducer/userreducer";
import { StyledComponent } from "../components/styles"

export const AboutUserPage = () => {
  const listOfUsers                     = useSelector(getUser);
  const currentUser                     = listOfUsers.find(user => (!!user.isLogged));
  
  return (
    <StyledComponent.HomePageWrapper>
      <UserInfoWrapper>
      <StyledUserText>User Name:              <strong>{currentUser?.userName}</strong></StyledUserText>
      <StyledUserText>User Surname:           <strong>{currentUser?.userSurname}</strong></StyledUserText>
      <StyledUserText>User Login:             <strong>{currentUser?.login}</strong></StyledUserText>
      <StyledUserText>Date of registration:   <strong>{currentUser?.registrationDate}</strong></StyledUserText>
      <StyledUserText>User status:            <strong>{currentUser?.isAdmin? 'admin' : 'user'}</strong></StyledUserText>
      </UserInfoWrapper>
    </StyledComponent.HomePageWrapper>
  )
}

const StyledUserText = styled.p`
margin-top: 0px;
margin-bottom: 10px;
font-size: 20px;
`
const UserInfoWrapper = styled.div`
position: relative;
top: 20px;
left: 30px;
`