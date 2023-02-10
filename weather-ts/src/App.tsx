import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/store';
import { updateData, updateCity, WeatherState, WeatherData } from "./redux/weather";
import { WEATHER_DATA } from "./data.js";
import ListData from './components/ListData';
import { ButtonWrapper } from "./components/ButtonWrapper";

interface WeatherObject {
  [key: string]: WeatherData;
}

function App() {
  const dispatch = useAppDispatch();
  const { city, data } = useAppSelector((state) => state.weatherReducer);

  // Checks if data is available in localStorage.
  // If present, then load data from localStorage
  useEffect(() => {
    let data = window.localStorage.getItem("savedData");
    if (data) {
      const wdata: WeatherState = JSON.parse(data);
      if (wdata) {
        dispatch(updateCity(wdata.city));
        dispatch(updateData(wdata.data));
      }
    }
  }, [dispatch]);

  // Clears localStorage
  function clear() {
    const clearStorage = window.localStorage.clear();

    if (clearStorage === undefined) {
      console.log("storage cleared");
    }
  }

  // Update City name and corresponding weather data to Redux
  // Update data only if the city name is valid
  function updateWeatherData() {
    const inputValue = (document.querySelector(
      "input[type='search']"
    ) as HTMLInputElement).value;
    if (inputValue !== "") {
      const weatherObj: WeatherObject = WEATHER_DATA;
      const currData = weatherObj[inputValue];
      if (currData !== undefined) {
        dispatch(updateCity(inputValue));
        dispatch(updateData(weatherObj[inputValue]));
      }
    }
  }

  // Save data to localStorage
  function saveData() {
    const currData = {
      city,
      data
    };
    window.localStorage.setItem("savedData", JSON.stringify(currData));
  }
  return (
    <div className="App">
      <div className="margin">Weather</div>
      <div className="margin">
        <input type="search" placeholder="Search city" />
        <ButtonWrapper onClick={updateWeatherData} title="Search" />
      </div>
      <div className="margin">{city}</div>
      <div className="margin">
        {data !== undefined && <ListData data={data}></ListData>}
      </div>
      {data !== undefined && (
        <ButtonWrapper onClick={saveData} title="Save Data" />
      )}
      <div className="margin">
        <ButtonWrapper onClick={clear} title="Clear Local Storage" />
      </div>
    </div>
  );
}

export default App;
