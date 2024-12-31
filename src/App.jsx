import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InfoBox from './components/InfoBox';

function App() {
  let [wetherData, setWeatherData] = useState(
    {
      city: "London",
      condition: {
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        text: "Partly cloudy",
      },
      country: "United Kingdom",
      fillsLike: 4.2,
      humidity: 93,
      temp: 7.3,
      visibility: 10,
      windSpeed: 18,
    }
  );

  let updateInfo = (newInfo) => {
    setWeatherData(newInfo);
  }

  return (
    <>
      <Navbar updateInfo={updateInfo} />
      <InfoBox data={wetherData} />
    </>
  );
}

export default App;
