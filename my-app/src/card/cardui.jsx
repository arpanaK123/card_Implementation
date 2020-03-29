import React from 'react';
import img from '../assets/a.jpg';
import "./card-style.css";

const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={img} alt="image1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"> Card Title</h4>
                <p className="card-text text-secondary">
                React is a JavaScript library for building user interfaces.
                 Learn what React is all about on our homepage or in the tutorial.
                </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>
    );

};

export default Card;