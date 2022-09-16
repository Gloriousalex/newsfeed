import styled from 'styled-components'

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
    margin-top: 5px;
    color: #FFFF;
  }
`;

const MenuLink = styled.link`
    margin: 0px;
    color: #FFFF;
`

const CompGames = styled.div`
  display    : block;
  margin-left: 20px;
`;

const AllNews = styled.div`
  width: 85px;
  display: block;
  border-right: 1px solid white;
  box-sizing: border-box;
  margin-right: 10px;
  text-align: center;
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
  margin-top: 20px;
  width: 300px;
  justify-content: center;
  text-align: center;
  p {
    margin: 0px;
    margin-top: 5px;
    color: white;
  }
`;

const NewsBig = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 320px;
  font-size: 1.2rem;
  color: #1D1F24;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 5%;
  margin-left: 1%;
  align-content: center;
  align-items: center;
img {
  width: 320px;
  height: 180px;
  border-radius: 5px;
  margin-bottom:5px;
}

p {
    text-align: center;
}
`;

const BigNewsWrapper = styled.div`
width: 90%;
margin: auto;
flex-wrap: wrap;
display: flex;
left: 15%;


`;

const HomePageWrapper = styled.div`
width: 70%;
margin: auto;
height: 60%;
max-height: 65%;
min-height: 80%;

`

const NewsTitle = styled.p`
font-size: 1.5em;
font-weight: 600;
text-align: left;
margin-left: 40px;
`
const NewsText = styled.p`
font-size: 1em;
font-weight: 400;
text-align: left;
width: 70%;
margin-left:30px;
`
const NewsFooter = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
`
const NewsDate = styled.p`
font-size: 1rem;
font-weight: normal;
margin-left:30px;
font-style: italic;
`

const Footer = styled.footer`
display: flex;
position: relative;
bottom: 0%;
height: 50px;
width: 100%;
background-color: #3a3636;
justify-content:center;
align-items: center;
p{
  color: white;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
}
` 
const CompanyName = styled.div`
position: relative;
left: 40%;
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
  Footer,
  MenuLink,
  CompanyName,
  NewsTitle,
  NewsText,
  NewsFooter,
  NewsDate,
  AllNews
};

