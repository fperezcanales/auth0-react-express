import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import NavBar from './components/navbar';
import People from './components/people';
import Profile from './components/profile';
import Home from './components/home';
import MainMenu from './main/MainMenu';
import './App.css';
import BusinessProfileForm from './components/business/BusinessProfileForm';
import BusinessProfile from './components/business/BusinessProfile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Profile} />
          <Route path="/home" exact component={Home} />
          <AuthenticatedRoute path="/new" exact component={BusinessProfileForm} />
          <AuthenticatedRoute path="/business" exact component={BusinessProfile} />
          <AuthenticatedRoute path="/main" component={MainMenu} />
          <AuthenticatedRoute path="/profile" component={Profile} />
          <AuthenticatedRoute path="/people" component={People} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
