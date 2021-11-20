import React from 'react';
import './App.scss';
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {MainPage} from "../pages/MainPage";
import {CatalogPage} from "../pages/CatalogPage";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

const App: React.FC = () => {
  return (
      <div className='container'>
          <Router>
              <Header />
                  <Switch>
                      <Route path='/' component={MainPage} exact />
                      <Route path='/catalog' component={CatalogPage} />
                      <Redirect to='/' />
                  </Switch>
              <Footer />
          </Router>
      </div>
  );
}

export default App;
