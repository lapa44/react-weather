import React from 'react';
import {Jumbotron} from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return (
        <Jumbotron className="jumboHeader" id="ELO">
            <h1>Weather React App!</h1>
            <p>You can check weather for today, next 7 days, and even national weather alerts!</p>
        </Jumbotron>
    );
};

export default Header;
