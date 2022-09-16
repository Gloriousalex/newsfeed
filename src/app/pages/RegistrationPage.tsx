import * as React                     from 'react';
import Avatar                         from '@mui/material/Avatar';
import Button                         from '@mui/material/Button';
import CssBaseline                    from '@mui/material/CssBaseline';
import TextField                      from '@mui/material/TextField';
import Grid                           from '@mui/material/Grid';
import Box                            from '@mui/material/Box';
import LockOutlinedIcon               from '@mui/icons-material/LockOutlined';
import Typography                     from '@mui/material/Typography';
import Container                      from '@mui/material/Container';
import { NavLink, useNavigate }       from 'react-router-dom';
import { useDispatch, useSelector }   from 'react-redux';
import { getUser, addUser }           from '../components/reducer/userreducer';

export default function SignUp() {
  const navigate                            = useNavigate();
  const listOfUsers                         = useSelector(getUser);
  const [loginUserError, setLoginUserError] = React.useState('');
  const dispatch                            = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser ={
      userName: data.get('firstName'),
      login: data.get('login'),
      password: data.get('password'),
      userSurname: data.get('lastName'),
      isLogged: true,
    };
    const checkUser = listOfUsers.find(user => user.login === newUser.login);
    if (checkUser?.login === newUser.login) {
      setLoginUserError(`user ${newUser.login} already exist`);
    } else {
      setLoginUserError('')
      dispatch(addUser(newUser));
      navigate('/');
    }   
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {(!!loginUserError) && 
        <div style = {{color: 'red'}}><Typography>{loginUserError}</Typography></div>}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="login"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to={'/login'} >
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>

  );
}
