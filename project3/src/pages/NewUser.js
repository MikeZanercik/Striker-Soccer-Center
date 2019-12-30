import React from "react";

// COMPONENTS
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import NewUserCard from "../components/NewUserCard/newUserCard"


function NewUser() {
    return (
        <div>
        <Header />
        <NewUserCard />
        <Footer />
    </div> 
    )
}

export default NewUser;