import React from 'react';
import {Link} from 'react-router-dom';

const Dogs = ({dogs}) => {
    return (
        <div className="Dogs">

            {dogs.map(
                dog => {
                const link = `/dogs/${dog.name}`;
                return (
                <div className="Dog">
                   <Link key={dog.name} to={link}><img src={dog.src} alt={dog.name} /></Link>
                    <span>{dog.name}</span>
                </div>
                )
            })}
        </div>
    )
}

export default Dogs;