import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SectionContainer from './components/SectionContainer'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { states, stateMap, USCurrent } from './helpers/StateInfo'

export default function App() {

  const [state, setState] = useState(
    {
      currentStateURL: 'https://covidtracking.com/api/v1/states/al/current.json',
      currentState: 'Alabama'
    }
  );

  const appStyle = {
    width: '80%',
    margin: 'auto',
	  overflow: 'hidden',
  };

  const hrStyle = {
    border: '.25em solid',
    borderRadius: '1em',
    marginBottom: '3em'
  }

  const handleChange = (e) => {
    let newCurrentURL = `https://covidtracking.com/api/v1/states/${stateMap[e.value]}/current.json`;
    setState({
      currentStateURL: newCurrentURL,
      currentState: e.value
    });
  }

  return(
    <div style={appStyle}>

      <Header />

      <SectionContainer
        title='US Data'
        current={USCurrent}
      />
      
      <hr style={hrStyle} />

      <Dropdown 
        options={states} 
        onChange={handleChange}
        value={state.currentState} 
        placeholder='Select a State'
      />

      <SectionContainer 
        title='State Data'
        state={state.currentState} 
        current={state.currentStateURL}
      />

    </div>
  )
}
