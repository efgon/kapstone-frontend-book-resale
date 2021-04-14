import React from "react";
import LoginPage from "./Views/Loginpage";
import SignUpPage from "./Views/SingUpPage";
import NavBar from "./Components/Navbar";
import { Route, Switch } from 'react-router-dom'
import Home from './Views/Home'
import Footer from './Components/Footer'
import SingleBookInfo from "./Views/SingleBookInfo";
import Header from './Components/Header'
import Searchresult from "./Views/Searchresult";
import UserProfilePage from './Views/UserProfile'
import Cart from './Views/Cart'
import AddressPage from './Views/AddressPage'
import OrderHistory from './Views/OderHistory'
import AccountSettings from './Views/AccountSettings'
import AllBooksPage from './Views/AllBooksPage'
import MyBooks from './Views/MyBooks'
import { booksArray } from './Components/BooksArray'
import './Style/app.css'
import AllArtBooks from './Views/AllArtBooks'
import AllCookingBooks from './Views/AllCookingBooks'
import AllCodingBooks from './Views/AllCodingBooks'
import AllMathBooks from './Views/AllMathBooks'
import AllPetsBooks from './Views/AllPetsBooks'
import AllHistoryBooks from './Views/AllHistoryBooks'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/SingleBookInfo/:id' render={(props) => <SingleBookInfo {...props} />} />
        <Route exact path='/Searchresult/:id' component={Searchresult} />
        <Route exact path='/SignUp' component={SignUpPage} />
        <Route exact path='/UserProfile' component={UserProfilePage} />
        <Route exact path='/LogInPage' component={LoginPage} />
        <Route exact path='/ShoppingCart' component={Cart} />
        <Route exact path='/AccountSettings' component={AccountSettings} />
        <Route exact path='/OrderHistory' component={OrderHistory} />
        <Route exact path='/AddressPage' component={AddressPage} />
        <Route exact path='/Allbooks' component={AllBooksPage} />
        <Route exact path='/AllArtBooks' component={AllArtBooks} />
        <Route exact path='/AllCodingBooks' component={AllCodingBooks} />
        <Route exact path='/AllCookingBooks' component={AllCookingBooks} />
        <Route exact path='/AllHistoryBooks' component={AllHistoryBooks} />
        <Route exact path='/AllMathBooks' component={AllMathBooks} />
        <Route exact path='/AllPetsBooks' component={AllPetsBooks} />
        <Route exact path='/MyBooks' component={MyBooks} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
