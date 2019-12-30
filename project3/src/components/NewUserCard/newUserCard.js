import React from "react";
import { Link } from "react-router-dom";
import "./newUserCard.css";

function NewUserCard() {
    return ( 
        <div className="card">
            <h3>Create A Username</h3>
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
                <div class="form-group">
                    <label>Repeat Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="button" class="btn btn-primary">Sign up</button>
            </form>
            <Link to="/signin" className={window.location.pathname === "/newuser" ? "nav-link active" : "nav-link"}>I'm already a user</Link>
        </div>
    </div>
    )
}

export default NewUserCard;