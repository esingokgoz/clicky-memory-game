import React from 'react';
import './Flower.css';

const Flower = props => (
    <div    
        className = "card"
        value = {props.id}
        onClick = { () => {props.handleOnClick(props.id)}}>
            <div className = "img-container">
                <img alt = "" src = {props.image} />
            </div>
    </div>
);

export default Flower;