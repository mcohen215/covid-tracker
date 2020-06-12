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

  /* Event handler for dropwdown option change. It gets the state that was selected from the dropdown,
  and sets the new state API link in the component state. */
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

      {/* The Header component of the webpage */}
      <Header />

      {/* The first section container on the webpage. Each section container contains a header for that section,
      the boxes to hold the data points, and a chart. This is the section container for the US data */}
      {/* title is used for the header, current and historic are API links, and radioName is a name for the radio button group */}
      <SectionContainer
        title='US Data'
        current={USCurrent}
        historic={USHistoric}
        radioName='USChart'
      />
      
      <hr style={hrStyle} />

      {/* The Dropdown component that corresponds to the second section container. This is the dropdown that lets you chose
      state */}
      {/* options is an array containing the dropdown options, onChange is the event handler, value is the current selected
      value that should be shown on the dropdown, and placeholder is default text to be shown if no options available */}
      <Dropdown 
        options={states} 
        onChange={handleChange}
        value={state.currentState} 
        placeholder='Select a State'
      />

      {/* The second section container on the webpage. This is the section container for state data. */}
      {/* title is used for the header, current and historic are API links, radioName is a name for the radio button group,
      and state is the current selected state being displayed. */}
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
