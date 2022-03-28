import React from 'react'
import "./App.css";
import News from "./components/Body/News";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Body/Home';
import Contact from './components/Body/Contact';



const App = () => { 
  
  return (
    <>
      
      <Router>
        <Navbar />
        <Switch>
          {/* businessentertainmentgeneralhealthsciencesportstechnology */}
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
          <Route exact path="/business">
            <News category="business" pageSize="9" key="business" />
          </Route>
          <Route exact path="/entertainment">
            <News
              category="entertainment"
              pageSize="9"
              key="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News category="general"  pageSize="9" key="general" />
          </Route>
          <Route exact path="/health">
            <News category="health"  pageSize="9" key="health" />
          </Route>
          <Route exact path="/science">
            <News category="science"  pageSize="9" key="science" />
          </Route>
          <Route exact path="/sports">
            <News category="sports"  pageSize="9" key="sports" />
          </Route>
          <Route exact path="/technology">
            <News
              category="technology"
              
              pageSize="9"
              key="technology"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
