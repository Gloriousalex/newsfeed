import React                  from 'react';
import './App.css';
import { Footer }             from './app/components/Footer/Footer';
import { Header }             from './app/components/Header/Header';
import { HomePage }           from './app/pages/HomePage';
import { LoginPage }          from './app/pages/LoginPage';
import { Route, Routes }      from 'react-router-dom';
import { AboutPage }          from './app/pages/AboutPage';
import { NotFoundPage }       from './app/pages/NotFoundPage';
import { SinglePage }         from './app/pages/SinglePage';
import { EditNewsPage }       from './app/pages/EditNewsPage';
import RegistrationPage       from './app/pages/RegistrationPage';
import { CreateNewsPage }     from './app/pages/CreateNewsPage';
import { FilteredNews }       from './app/pages/FilteredNews';
import styled                 from 'styled-components';

const App = () => {
  return (
    <AppWrapper>
    <Header/>
    <MainWrapper>
      <Routes>
      <Route path = '/' element              = {<HomePage/>}/>
      <Route path = '/about' element         = {<AboutPage/>}/>
      <Route path = '/login' element         = {<LoginPage/>}/>
      <Route path = 'news/sort/:tag' element = {<FilteredNews/>}/>
      <Route path = '/news/:id' element      = {<SinglePage/>}/>
      <Route path = '/sign-up' element       = {<RegistrationPage/>}/>
      <Route path = '/news/:id/edit' element = {<EditNewsPage/>}/>
      <Route path = '/add_news' element      = {<CreateNewsPage/>}/>
      <Route path = '*' element              = {<NotFoundPage/>}/>
    </Routes>
    </MainWrapper>
    <Footer/>

    </AppWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  min-height: calc(100vh - (50px + 100px));
`

const AppWrapper = styled.div`
  width: 100%;
  display:block;
  height: 100%;
  min-height: 100%;
  position: absolute;
`