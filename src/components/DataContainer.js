import React, { Component } from 'react'
import DataBox from './DataBox'

export class DataContainer extends Component {

    state = {
        cases: 0,
        deaths: 0,
        tests: 0
    }

    fetchData = () => {
        console.log('fetch');
        fetch(this.props.link).then(res => res.json()).then(data => {
            let cases;
            let deaths;
            let tests;
            if(Array.isArray(data)) {
                cases = data[0].positive.toLocaleString();
                deaths = data[0].death.toLocaleString();
                tests = data[0].total.toLocaleString();
            } else {
                cases = data.positive.toLocaleString();
                deaths = data.death.toLocaleString();
                tests = data.total.toLocaleString();
            }
            this.setState({
                cases,
                deaths,
                tests,
             });
        }).catch(err => {
            this.setState({
                cases: "Error",
                deaths: "Error",
                tests: "Error"
            });
        });
    }

    componentDidMount() {
        console.log('mount');
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        console.log('update');
        if(prevProps.link !== this.props.link) {
            this.fetchData();
        }
    }

    render() {
        console.log('render');
        return (
            <div style={dataContainerStyle}>
                <DataBox title='Cases' data={this.state.cases}/>
                <DataBox title='Deaths' data={this.state.deaths}/>
                <DataBox title='Tests' data={this.state.tests}/>
            </div>
        )
    }
}

const dataContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
}

export default DataContainer
