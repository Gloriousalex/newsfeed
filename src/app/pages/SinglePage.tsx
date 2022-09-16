import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteNews, getNews }                      from "../components/reducer/newsreducer";
import { useDispatch, useSelector }                  from "react-redux"
import { StyledComponent }              from "../components/styles";
import styled                           from "styled-components";
import { Button }                       from "@mui/material";
import { getUser } from "../components/reducer/userreducer";

export const SinglePage = () => {
  const {id}           = useParams();
  const news           = useSelector(getNews);
  const navigate       = useNavigate();
  const listOfUsers                     = useSelector(getUser);
  const currentUser                     = listOfUsers.find(user => (!!user.isLogged));
  const [filteredNews] = news.filter(news => (news.id === id));
  const goback         = () => navigate(-1);
  const dispatch = useDispatch();

  const handleDelete = (id:string) => {
    dispatch(deleteNews(id));
    navigate(`/`);
  }

  return (
    <StyledComponent.HomePageWrapper>
      <ButtonWrapper>
      <StyledButton variant="outlined" onClick={goback}>Go Back</StyledButton>
      </ButtonWrapper>

      <StyledComponent.NewsTitle>{filteredNews.title}</StyledComponent.NewsTitle>
      <PageTitleWrapper>
      <img src={filteredNews.imageURL} alt=""/>
      {filteredNews.fullNews?.map((news: string) => <StyledComponent.NewsText>{news}</StyledComponent.NewsText>)}
      </PageTitleWrapper>
      <StyledComponent.NewsFooter>
        <StyledComponent.NewsDate>Posted by <strong>{filteredNews.editedBy}</strong></StyledComponent.NewsDate>
        <StyledComponent.NewsDate>{filteredNews.dateOfWriting}</StyledComponent.NewsDate>
     </StyledComponent.NewsFooter>
     
     
     {currentUser?.isAdmin?
     <ButtonWrapper>
      <Link to='edit' key={id}><StyledButton variant="outlined">Edit</StyledButton></Link>
      <StyledButton variant="outlined" onClick={()=>handleDelete(filteredNews.id)}>delete</StyledButton> 
      </ButtonWrapper>
     : true}
    </StyledComponent.HomePageWrapper>
  )
}

const StyledButton = styled(Button)` &&{
  margin-top: 10px;
  margin-right: 10px;
  text-decoration: none;
  border: 2px solid rgba(25, 118, 210, 0.5);
  }
`

const PageTitleWrapper = styled.div`
  margin-top: 10px;
  img {
  border-radius: 5px;
  margin-left: 30px;
  margin-right: 20px;
  margin-bottom: 10px;
  float: left;
  width: 320px;
  height: 180px;
  }
`
const ButtonWrapper = styled.div`
  display:flex;
  width: auto;
  position: relative;
  left: 30px;
  padding-bottom: 10px;
`