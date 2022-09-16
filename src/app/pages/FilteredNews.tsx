import { useParams }                from "react-router-dom"
import { Button }                   from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styled                       from "styled-components"
import { v4 as uuidv4 }             from 'uuid';
import { Link, useSearchParams }    from "react-router-dom";
import { deleteNews, getNews }      from "../components/reducer/newsreducer";
import { getUser }                  from "../components/reducer/userreducer";
import { StyledComponent }          from "../components/styles";
import SearchIcon                   from '@mui/icons-material/Search';
import InputBase                    from '@mui/material/InputBase';
import { useState }                 from "react";


export const FilteredNews = () => {
  const {tag}                           = useParams();
  const listOfNews                      = useSelector(getNews);
  const listOfUsers                     = useSelector(getUser);
  const currentUser                     = listOfUsers.find(user => (!!user.isLogged));
  const dispatch                        = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue]     = useState(searchParams.get('q'));

  const handleDelete = (id:string) => {
    dispatch(deleteNews(id));
  }

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const query = form.search.value;
    setSearchParams(query? {q : query} : {});
  }


  return (
    <StyledComponent.HomePageWrapper>
      <Search>
        <SearchIcon  sx={{ fontSize: 40, color: 'lightblue', display: 'block' }} ></SearchIcon>
          <StyledForm onSubmit={handleSearchSubmit}>      
            <StyledIput 
              type="search" 
              name="search" 
              placeholder="Search news" 
              onChange={(event) => setInputValue(event.target.value)}
              fullWidth
            />     
          </StyledForm>      
      </Search>
      {listOfNews.filter(news=> (tag === "all"? news.tag : (news.tag === tag)))
      .filter(news => inputValue? news.title.toLowerCase().includes(inputValue.toLowerCase()): true)
      .map((news) => (
        <SmallNewsWrapper id={news.id}>
          <Link  key={news.id} to={`/news/${news.id}`}><StyledImg src={news.imageURL}></StyledImg> </Link>
            <StyledTitleWrapper id={uuidv4()}>
              <StyledTitle>
                <StyledLink  key={news.id} to={`/news/${news.id}`}>{news.title}</StyledLink>
              </StyledTitle>              
              <TextWrapper id={uuidv4()}>       
                <StyledTextAboutTime>{news.dateOfWriting}</StyledTextAboutTime>
                <StyledTextAboutAuthor>by {news.editedBy}</StyledTextAboutAuthor>
              </TextWrapper>
            </StyledTitleWrapper> 
          {currentUser?.isAdmin?  <StyledButton variant="outlined" onClick={()=>handleDelete(news.id)}> delete</StyledButton>
          : <></>}
        </SmallNewsWrapper>
      ))}
    </StyledComponent.HomePageWrapper>
  )
}

const StyledButton = styled(Button)` &&{
  margin: 0px auto 0px 20px;
  text-decoration: none;
  border: 2px solid rgba(25, 118, 210, 0.5);
  position: relative;
  }
`

const SmallNewsWrapper = styled.div`
  height: auto;
  width: 80%; 
  display: flex;
  margin-top: 1%;
  margin-left: 5%;
  padding-bottom: 0.5%;
  border-bottom: 1px solid;
  border-color: #dbd8d8;
`

const StyledImg = styled.img`
  width: 224px;
  height: 126px;
  border-radius: 10px;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
`

const StyledTitle = styled.p`
  font-size: 1.5em;
  width: fit-content;
  
`

const StyledLink = styled(Link)` &&{
  text-decoration: none;
}
  
`

const StyledTextAboutTime = styled.p`
  font-size: 1.0em;
  font-weight: 300;
  color: #747272;
`
const StyledTextAboutAuthor = styled.p`
  font-size: 1.0em;
  font-weight: 500;
  right: 0%;
`

const StyledTitleWrapper = styled.div`
  display:block;
  margin-left: 2%;
  width: 100%;
`

const Search = styled.div`
  left: 5%;
  display: flex;
  position: relative;
  width: 40%;
  height: 40px;
  margin-left: 10px;
  border-color: #8CBAE8;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  margin-top: 10px;
`
const StyledIput = styled(InputBase) `&& {
  height: 40px;
  width: 100%;
}
`

const StyledForm = styled.form`
  width: 90%;
`