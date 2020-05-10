import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import NavBar from './components/navbar';
import People from './components/people';
import Profile from './components/profile';
import BusinessProfile from './components/business/businessProfile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={BusinessProfile} />
          <Route path="/business" component={BusinessProfile} />
          <AuthenticatedRoute path="/profile" component={Profile} />
          <AuthenticatedRoute path="/people" component={People} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
