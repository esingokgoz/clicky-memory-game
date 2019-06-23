import React from 'react';
import './Header.css';

const Header = props => (
    <nav>
        <ul>
            <li>
                <a className = "navbar-brand" href = "/"><h2>Flowers Memory Game</h2></a>
            </li>
            <li>
                { props.statement }
            </li>
            <li>
                <h2>Score: { props.score } | Top Score: { props.topScore }</h2>
            </li>
        </ul>
    </nav>
);

export default Header;