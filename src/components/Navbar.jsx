import React, { useState } from "react";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SearchIcon from "@mui/icons-material/Search";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { TextField, Button } from "@mui/material";
import "./Navbar.css";

function Navbar({updateInfo}) {
    let [searchData, setSearchData] = useState("London");

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let resault = {};

    let getWeatherInfo = () => {
      fetch(`${API_URL}key=${API_KEY}&q=${searchData}&aqi=no`)
      .then( responce => responce.json())
      .then( (data) => {
        resault = {
          city : data.location.name,
          country : data.location.country,
          temp : data.current.temp_c,
          windSpeed : data.current.wind_kph,
          humidity : data.current.humidity,
          visibility : data.current.vis_km,
          condition : {
            text : data.current.condition.text,
            icon : data.current.condition.icon,
            code : data.current.condition.code
          },
          fillsLike : data.current.feelslike_c,
          isDay : data.current.is_day
        }

        console.log(resault);
        updateInfo(resault);
      })
      .catch( err => console.log(err));
    }

    let handleInput = (event) => {
      setSearchData(event.target.value);
    }

    let handleSubmit = (event) => {
      event.preventDefault();
      setSearchData("");
    }

  return (
    <nav>
      <h1>
        <CloudQueueIcon className="cloud-icon" />
        Weather App
      </h1>
      <form className="search-bar" onSubmit={handleSubmit}>
        <TextField
          id="search-field"
          label="Search"
          variant="outlined"
          fullWidth
          size="small"
          aria-label="Search bar"
          value={searchData}
          onChange={handleInput}
        />
        <Button
          className="search-btn"
          variant="contained"
          type="submit"
        >
            <SearchIcon />
            Search
        </Button>
      </form>
      <Button
        className="btn"
        variant="contained"
      >
        <MyLocationIcon /> &nbsp; Current Location
      </Button>
    </nav>
  );
}

export default Navbar;
