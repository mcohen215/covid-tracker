import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SectionContainer from './components/SectionContainer'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { states, stateMap, USCurrent } from './helpers/StateInfo'


class App extends Component {

  state = {
    currentStateURL: 'https://covidtracking.com/api/v1/states/al/current.json',
    currentState: 'Alabama'
  }

  handleChange = (e) => {
    let newCurrentURL = `https://covidtracking.com/api/v1/states/${stateMap[e.value]}/current.json`;
    this.setState({
      currentStateURL: newCurrentURL,
      currentState: e.value
    });
  }

  render() {

    return (
      <div style={appStyle}>
        <Header />

        <SectionContainer 
          title='US Data' 
          current={USCurrent}
        />

        <hr style={hrStyle} />

        <Dropdown 
          options={states} 
          onChange={this.handleChange}
          value={this.state.currentState} 
          placeholder='Select a State'
        />

        <SectionContainer 
          title='State Data'
          state={this.state.currentState} 
          current={this.state.currentStateURL}
        />
      </div>
    );
  }
}

const appStyle = {
  width: '80%',
  margin: 'auto',
	overflow: 'hidden',
}

const hrStyle = {
  border: '.25em solid',
  borderRadius: '1em',
  marginBottom: '3em'
}

export default App;
