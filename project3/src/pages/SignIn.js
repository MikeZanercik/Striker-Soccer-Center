import React from "react";

// COMPONENTS
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import SignInCard from "../components/SignInCard/signInCard"


function SignIn() {
    return (
       <div>
           <Header />
           <SignInCard />
           <Footer />
       </div> 
    )
}

export default SignIn;