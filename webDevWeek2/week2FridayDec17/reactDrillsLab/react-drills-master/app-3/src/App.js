import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor () {
    super ();

    this.state = {
      filterString: "",
      foods: ["pho", "kao piek sen", "kao poon", "mee kati", "hue tieu"]
    };
  }

  handleChange(filter) {
    this.setState({filterString: filter});
  }

  render () {
    let foodsToDisplay = this.state.foods.filter((element, indext) => { return element.includes(this.state.filterString);
    })
    .map((element, index) => {return <h2 key={index}>{element}</h2>;
    
  });

  return (
    <div className='App'>
      <input onChange={e => this.handleChange(e.target.value)} type="text" />
      {foodsToDisplay}
    </div>
  );
}
}


export default App;
