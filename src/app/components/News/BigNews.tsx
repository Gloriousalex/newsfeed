import { Button }                   from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link }                     from "react-router-dom"
import styled                       from "styled-components"
import { deleteNews, getNews }      from "../reducer/newsreducer"
import { getUser }                  from "../reducer/userreducer"
import { StyledComponent }          from "../styles"


export const BigNews = () => {
  const listOfNews    = useSelector(getNews);
  const listOfUsers   = useSelector(getUser);
  const currentUser = listOfUsers.find(user => (!!user.isLogged));
  const dispatch      = useDispatch();

  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(deleteNews(id));
  }
  
  return (
    <StyledComponent.BigNewsWrapper>
      {listOfNews.filter((news) => news.isBigNews)
        .map((news) => (              
          <StyledComponent.NewsBig key={news.id}>
            <Link  key={news.id} to={`/news/${news.id}`}>
              <img src = { news.imageURL } alt = ""/>
              <p>{news.title}</p>
            </Link>
            {currentUser?.isAdmin? <StyledButton variant="outlined" onClick={()=>handleDelete(news.id)}> delete</StyledButton> : <></>}
          </StyledComponent.NewsBig>    
      ))}
    </StyledComponent.BigNewsWrapper>
  )
}

const StyledButton = styled(Button)` &&{
  margin: 0px auto 0px auto;
  text-decoration: none;
  border: 2px solid rgba(25, 118, 210, 0.5);
  position: relative;
  }
`