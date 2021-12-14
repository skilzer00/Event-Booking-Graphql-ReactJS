import React, {
  Component
} from 'react';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from './components/NavigationBar/MainNavigation.js';

import './App.css';

class App extends Component {

  render() {
    return (
    <BrowserRouter >
      <React.Fragment >
        <MainNavigation / >
          <main className = "main-content" >
            <Routes>
              <Route exact path = "/"element = {< AuthPage / >}/>
              <Route path = "/auth"element = {< AuthPage / >}/>
              <Route path = "/events"element = {< EventsPage / >}/>
              <Route path = "/bookings"element = {< BookingsPage / >}/>
            </Routes>
          </main>
      </React.Fragment>
    </BrowserRouter>
    );
  }
}

export default App;
