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
import AddressPage from './Views/AddressPage'
import OrderHistory from './Views/OderHistory'
import AccountSettings from './Views/AccountSettings'
import SearchNoResults from "./Views/SearchNoResults";
import Allbooks from './Views/Allbooks'
import MyBooks from './Views/MyBooks'

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
        <Route exact path='/AccountSettings' component={AccountSettings} />
        <Route exact path='/OrderHistory' component={OrderHistory} />
        <Route exact path='/AddressPage' component={AddressPage} />
        <Route exact path='/Allbooks' component={Allbooks} />
        <Route exact path='/MyBooks' component={MyBooks} />
        <Route exact path='/Searchresult/:search' component={SearchNoResults} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
