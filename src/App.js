import React from "react";
import LoginPage from "./Views/Loginpage";
import SignUpPage from "./Views/SingUpPage";
import NavBar from "./Components/Navbar";
import { Route, Switch } from 'react-router-dom'
import Home from './Views/Home'
import './Style/app.css'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <LoginPage />
        <SignUpPage />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
