import styled, {css} from 'styled-components'

const HeaderDiv = styled.div`
  background-color: #3a3636;
  width: 100%;
  height: 100px;
  display: flex;
`;
const HeaderWrapper = styled.div`
  position: relative;
  width: 70%;
  left: 15%;
  height: 100px;
  background-color: #4a3636;
  display:flex;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const MenuDiv = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 20px;
  justify-content: center;
  p {
    margin: 0px;
    color: #FFFF;
  }
`;

const CompGames = styled.div`
  display: block;
`;

const PsGames = styled.div`
  display: block;
  margin-left:30px;
`;

const MobileGames = styled.div`
  display: block;
  margin-left:30px;
`;

const UserDiv = styled.div`
  width: 300px;
`;

const NewsBig = styled.div`
  height: 270px;
  width: 320px;
  font-size: 1.2rem;
  color: #1D1F24;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  align-content: center;
  align-items: center;
img {
  border-radius: 5px;
  margin-bottom:5px;
}

p {
    text-align: center;
}
`;

const BigNewsWrapper = styled.div`
width: 70%;
height: auto;
display: flex;
left: 15%;
`;

const HomePageWrapper = styled.div`
width: 70%;
margin: auto;
height: auto;
`

export const StyledComponent = {
  HeaderDiv,
  HeaderWrapper,
  LogoImg,  
  MenuDiv,
  CompGames,
  PsGames,
  MobileGames,
  UserDiv,
  NewsBig,
  HomePageWrapper,
  BigNewsWrapper,
};
