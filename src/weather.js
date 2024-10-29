import React, {Component} from 'react'
import './weather.css'

let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=leighton buzzard&appid=12409aadc256c8c0e471623828828ac4'


class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: {},
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch(weatherURL)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          weather: json,
        })
      })
  }

  render(){
    if(!this.state.isLoaded){return}
    return(
    <div onClick={this.weatherUpdate} className="weatherWidget">
      <p id='temp'>
        {Number(this.state.weather.main.temp - 273.15).toFixed(1)}
      </p> 
      <div className="smallText">
        <p id="weather">
          {this.state.weather.weather[0].description}
        </p>
        <p id="location">
          {this.state.weather.name}
        </p>
      </div>
    </div>
    )
  }
}


export default Weather
