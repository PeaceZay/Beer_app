import React from 'react';

function BeerCard(props) {
    return (
        <li style= {{listStyle: "none"}}>
            <h3>{props.name} <span style= {{color: "blue"}}>{props.first_brewed}</span></h3>
            <h4>{props.tagline}</h4>
            <img style= {{height: "150px" }} src = {props.image_url}></img>
            <p style= {{textAlign: "left"}}><span style= {{color: "Red"}}>{props.abv}</span> {props.description}</p>
        </li>
    )
}

export default BeerCard