import React from "react";
import LoginPage from "./Views/Loginpage";
import SignUpPage from "./Views/SingUpPage";
import NavBar from "./Components/Navbar";
import { Route, Switch } from 'react-router-dom'
import Home from './Views/Home'
import './Style/app.css'
import Footer from './Components/Footer'
import SingleBookInfo from "./Views/SingleBookInfo";
import Header from './Components/Header'
import Searchresult from "./Views/Searchresult";
import UserProfilePage from './Views/UserProfile'
import Cart from './Views/Cart'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/SingleBookInfo' component={SingleBookInfo} />
        <Route exact path='/Searchresult' component={Searchresult} />
        <Route exact path='/SignUp' component={SignUpPage} />
        <Route exact path='/UserProfile' component={UserProfilePage} />
        <Route exact path='/LogInPage' component={LoginPage} />
        <Route exact path='/ShoppingCart' component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
