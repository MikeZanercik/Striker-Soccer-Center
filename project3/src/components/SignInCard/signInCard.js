import React from "react";
import { Link } from "react-router-dom";
import "./signInCard.css";

function SignInCard() {
    return ( 
        <div className="card">
            <h3>Sign In</h3>
        <div className="card-body">
            
            <form>
                <div class="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="button" class="btn btn-primary">Sign In</button>
            </form>
            <Link to="/newuser" className={window.location.pathname === "/newuser" ? "nav-link active" : "nav-link"}>New User</Link>
        </div>
    </div>
    )
}

export default SignInCard;