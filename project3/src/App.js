import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// PAGE IMPORTS
import SignIn from "./pages/SignIn";
import Fields from "./pages/Fields";
import Reserve from "./pages/Reserve";
import NewUser from "./pages/NewUser"

// COMPONENT IMPORTS
import Wrapper from "./components/Wrapper/wrapper";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/newuser" component={NewUser} />
          <Route exact path="/fields" component={Fields} />
          <Route exact path="/reserve" component={Reserve} />
        </Wrapper>
      </div>
    </Router>
  )
}


export default App;
