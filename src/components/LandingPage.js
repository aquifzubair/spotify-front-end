import React from "react";
import "../style/Landing.css";
import { Link } from 'react-router-dom';

function LandingPage() {

    // console.log(accessUrl)
    return (
        <div className="landing">
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <Link to='/signup'>SIGNUP</Link>
            <Link to='/login'>LOGIN</Link>
        </div>
    );
}

export default LandingPage;
