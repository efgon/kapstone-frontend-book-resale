import React from "react";
import LoginPage from "./Views/Loginpage";
import SignUpPage from "./Views/SingUpPage";
import NavBar from "./Components/Navbar";
// Views/Loginpage.js

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginPage />
      <SignUpPage />
    </div>
  );
}

export default App;
