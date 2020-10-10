import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = ({dogs}) => {

    return (
        <div className="Nav">
            {dogs.map(
                dog => {
                const link = `/dogs/${dog.name}`;
                return (<NavLink className="Nav-link" key={dog.name} to={link}>{dog.name}</NavLink>)
            })}
        </div>
    )
}

export default Nav;