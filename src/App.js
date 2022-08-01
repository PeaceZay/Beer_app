import './App.css';
import React, { Component } from 'react';
import BeerCard from './BeerCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBeer: []
    }//,
    // can add more things here!
  };

  componentDidMount(){
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        arrayOfBeer: data
      })
    })

  };

  render() {
    return (
      <div className="App">
        <ol>{this.state.arrayOfBeer.map((beer, index) => {
          return (
            <BeerCard key={index} 
            name ={beer.name} 
            image_url = {beer.image_url} 
            first_brewed = {beer.first_brewed} 
            tagline = {beer.tagline} 
            abv = {beer.abv} 
            description = {beer.description}
            ></BeerCard>
          )
        })}</ol>
      </div>
    );

  }
}
export default App;
