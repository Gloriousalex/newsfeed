import { useSelector }        from "react-redux";
import styled                 from "styled-components"
import { getUser }            from "../components/reducer/userreducer";
import { StyledComponent }    from "../components/styles"

export const AboutUserPage = () => {
  const listOfUsers                     = useSelector(getUser);
  const currentUser                     = listOfUsers.find(user => (!!user.isLogged));
  
  return (
    <StyledComponent.HomePageWrapper>
      <UserInfoWrapper>
      <StyledUserText>
        <p>User Name:</p><strong>{currentUser?.userName}</strong>
      </StyledUserText>
      <StyledUserText>
        <p>User Surname:</p><strong>{currentUser?.userSurname}</strong>
      </StyledUserText>
      <StyledUserText>
        <p>User Login:</p><strong>{currentUser?.login}</strong>
      </StyledUserText>
      <StyledUserText>
        <p>Date of registration:</p><strong>{currentUser?.registrationDate}</strong>
      </StyledUserText>
      <StyledUserText>
        <p>User status:</p><strong>{currentUser?.isAdmin? 'admin' : 'user'}</strong>
      </StyledUserText>
      </UserInfoWrapper>
    </StyledComponent.HomePageWrapper>
  )
}

const StyledUserText = styled.p`
display      : flex;
margin-top   : 0px;
margin-bottom: 10px;
font-size    : 20px;
p {
  width     : 200px;
  margin    : 0%;
  font-style: italic;
}
`
const UserInfoWrapper = styled.div`
position: relative;
top     : 20px;
left    : 30px;
`