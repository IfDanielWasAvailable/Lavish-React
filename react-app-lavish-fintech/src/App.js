import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer';
import Services from './components/pages/Services/Services';
//import Products from './components/pages/Services/Services';
//import Signup from './components/pages/Services/Services';




function App() {

  useEffect ( () => {
    document.title = "LAVISH";
  }, [] );


  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services'  component={Services} />
 
      </Switch>
      <Footer/>
   </Router>
  );
}

export default App;
