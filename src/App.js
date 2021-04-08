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
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/SingleBookInfo' component={SingleBookInfo} />
        <LoginPage />
        <SignUpPage />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
