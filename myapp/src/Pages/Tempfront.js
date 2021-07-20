import React from 'react'
import { useState, useEffect } from 'react'
import walbg from '../Image/seesky.jpg'
import '../Index.css'
const Tempfront = () => {
  const [search, setsearch] = useState()
  const [data, setData] = useState()

  const handleinput = (e) => {
    setsearch(e.target.value)
  };

  useEffect(() => {

    const fatchapi = async () => {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search},&appid=1ce34b39b209e33b8500e1150c79915b`);
      const apidata = await response.json();
      setData(apidata);
    };

    fatchapi();
  }, [search])

  return (

    <div className="container shadow-lg">
      <div className="row">
        <div className="card bg-dark text-white p-0">
          <img className="card-img" src={walbg} alt="Card image" />
          <div className="card-img-overlay">

            <div className="col-6 offset-3">
              <h1 className="card-title text-center">Weather</h1>
              <div className="input-group mt-4"> <input type="search" placeholder="Search City" className="form-control" value={search} onChange={handleinput} /></div>
            </div>

            {data == undefined ? (<h4>No City</h4>) : (data.cod == "404") ? (<h3>No City</h3>) : <div>
              <div className="col-8 mt-4 cclr "><span><h4>City - {data.name + ", " + data.sys.country}</h4></span></div>
              <div class="row">
                <div class="col-6"><h5>Max Temprature :</h5> {(data.main.temp_max - 273.15).toFixed(2)}</div>
                <div class="col-6"><h5>Min Temprature :</h5> {(data.main.temp_min - 273.15).toFixed(2)}</div>
                <div class="col-6"><h5>Weather :</h5> {data.weather[0].main}</div>
                <div class="col-6"><h5>Description :</h5> {data.weather[0].description}</div>
              </div>





            </div>



            }

          </div>
        </div>

      </div>
    </div>

  )
}

export default Tempfront
