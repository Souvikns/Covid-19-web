import React from 'react';
import './App.css';
import axios from 'axios'
import Dataholder from './components/Dataholder'
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      country: "",
      datas: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    axios({
      "method": "GET",
      "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "5f7605b01emsh296733c2a4b5c75p1f47e4jsnc8776dc3a638"
      }, "params": {

      }
    })
      .then((response) => {
        this.setState({
          datas: response.data.data.covid19Stats
        })
        console.log(this.state.datas)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  handleChange(event) {
    this.setState({ country: event.target.value })
  }

  searchBtn() {
    axios({
      "method": "GET",
      "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "5f7605b01emsh296733c2a4b5c75p1f47e4jsnc8776dc3a638"
      }, "params": {
        "country": this.state.country[0].toUpperCase() + this.state.country.slice(1)
      }
    })
      .then((response) => {
        this.setState({
          datas: response.data.data.covid19Stats
        })
        console.log(this.state.datas)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="section">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-quarter">
            <div className="columns">
              <div className="column">
              <input className="input is-danger"
              type="text"
              value={this.state.country}
              onChange={this.handleChange}
              placeholder="Country" />
              
              </div>
              <div className="column">
              <button className="button is-danger" onClick={() => { this.searchBtn() }}>Search</button>
              </div>

            </div>
          </div>
        </div>
        </div>
        <div className="contain">
        {
          this.state.datas.map((data)=>{
            return <Dataholder 
            country={data.country}
            province={data.province}
            lastUpdate={data.lastUpdate}
            confirmed={data.confirmed}
            deaths={data.deaths}
            recovered={data.recovered}
            />
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
