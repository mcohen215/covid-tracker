import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SectionContainer from './components/SectionContainer'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { states, stateMap, USCurrent, USHistoric } from './helpers/Helpers'

export default function App() {

  const [state, setState] = useState(
    {
      currentStateURL: 'https://covidtracking.com/api/v1/states/al/current.json',
      historicStateURL: 'https://covidtracking.com/api/v1/states/al/daily.json',
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
    let newHistoricURL = `https://covidtracking.com/api/v1/states/${stateMap[e.value]}/daily.json`
    setState({
      currentStateURL: newCurrentURL,
      historicStateURL: newHistoricURL,
      currentState: e.value
    });
  }

  return(
    <div style={appStyle}>

      <Header />

      <SectionContainer
        title='US Data'
        current={USCurrent}
        historic={USHistoric}
        radioName='USChart'
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
        historic={state.historicStateURL}
        radioName='StateChart'
      />

    </div>
  )
}
