import React from 'react';
import {Link, useParams} from 'react-router-dom';


const DogsDetail = ({dogs}) => {

const { name } = useParams();

const dog = dogs.find(dog => dog.name === name )

console.log(dog);
    return (
        <div className="DogDetail">
            <img src={dog.src} alt={dog.name} />
            <span><b>Name: </b>{dog.name}</span>
            <span><b>Age: </b>{dog.age}</span>
            <spana><b>Facts:</b></spana>
            <ul>
                {dog.facts.map(
                    fact => {
                return (
                     <li>{fact}</li>
                     )
                })}
            </ul>
        </div>
        )
}
export default DogsDetail;