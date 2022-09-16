import { Box, Button, Checkbox, FormControlLabel, Radio, RadioGroup, TextField }  from "@mui/material";
import { useDispatch, useSelector }                                               from "react-redux";
import { Link, useNavigate, useParams }                                           from "react-router-dom"
import styled                                                                     from "styled-components";
import { addNews, editNews, getNews }                                                      from "../components/reducer/newsreducer";
import { getUser }                                                                from "../components/reducer/userreducer";


export const EditNewsPage = () => {
  const {id}         = useParams();
  const news         = useSelector(getNews);
  const filteredNews = news.find(news => (news.id === id));
  const listOfUsers  = useSelector(getUser);
  const currentUser  = listOfUsers.find(user => (!!user.isLogged));
  const dispatch     = useDispatch();
  const navigate     = useNavigate();

  const validateNews = (event: any) => {
    event.preventDefault();
    const data    = new FormData(event.currentTarget);
    const newDate = new Date().toLocaleDateString('En-US',
    { 
      weekday: 'long',
      year   : 'numeric',
      month  : 'long',
      day    : '2-digit',
      hour   : 'numeric',
      minute : 'numeric'
     });

    const editedNews = {
      title        : data.get('title'),
      imageURL     : data.get('imageurl'),
      fullNews     : [data.get('fullNews')],
      isBigNews    : data.get('OnMainpage')? true  : false,
      id           : id,
      dateOfWriting: `${newDate}`,
      tag          : data.get('radio-buttons-group'),
      editedBy     : `${currentUser?.userName} ${currentUser?.userSurname}`,
    }
    dispatch(editNews(editedNews));
    navigate(-1);
  }

  const handleAddNews = (event: any) => {
    event.preventDefault();
    const data    = new FormData(event.currentTarget);
    const newDate = new Date().toLocaleDateString('En-US',
    { 
      weekday: 'long',
      year   : 'numeric',
      month  : 'long',
      day    : '2-digit',
      hour   : 'numeric',
      minute : 'numeric'
     });

    const editedNews = {
      title        : data.get('title'),
      imageURL     : data.get('imageurl'),
      fullNews     : [data.get('fullNews')],
      isBigNews    : data.get('OnMainpage')? true : false,
      dateOfWriting: `${newDate}`,
      tag          : data.get('radio-buttons-group'),
      editedBy     : `${currentUser?.userName} ${currentUser?.userSurname}`,
    }
    dispatch(addNews(editedNews))
    navigate('/news/sort/all')
  }

  return (
    
  <EditPageWrapper>
    {(!!currentUser?.isAdmin? 
      <>
        <TitleComponent>Editing</TitleComponent>
        <Box component="form" noValidate  onSubmit={filteredNews? validateNews: handleAddNews} sx={{ width: 500, maxWidth: '100%' }}>
          <TextField
          id="title"
          name="title"
          label="Title of news"
          defaultValue={filteredNews?.title}
          helperText="edit title of news"
          variant="standard"
          fullWidth
          multiline
          />
          <TextField
          id="imageURL"
          label="Image url"
          maxRows={2}
          defaultValue={filteredNews?.imageURL}
          name="imageurl"
          helperText="edit image url of news"
          variant="standard"
          fullWidth
          multiline
          /> 
          <TextField
          id="fullNews"
          label="Text of News"
          defaultValue={filteredNews?.fullNews}
          name="fullNews"
          helperText="edit text of news"
          variant="standard"
          style={{width: 1300}}
          multiline
          maxRows={10}
          /> 
          <FormControlLabel
            control={<Checkbox value="true" color="primary" name="OnMainpage" />}
            label="Allow news be on a main page"
          />
          <RadioGroup
          row
          aria-labelledby="RadioButtons"
          defaultValue="PC"
          name="radio-buttons-group"
          >
            <FormControlLabel value="PC" control={<Radio />} label="PC News" />
            <FormControlLabel value="Console" control={<Radio />} label="Console News" />
            <FormControlLabel value="Mobile" control={<Radio />} label="Mobile News" />
          </RadioGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>       
        </Box>
      </> : 
    <span>
      <p>You don't have permission for this. Please <Link to="/login"> login</Link> to continue</p>      
    </span>)}    
  </EditPageWrapper>
  )
}

const TitleComponent = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
`
const EditPageWrapper = styled.div`
  width: 70%;
  margin: auto;
  overflow: auto;
`

