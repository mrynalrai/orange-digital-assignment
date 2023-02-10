import { useEffect, useState } from "react";
import { WeatherData } from "../redux/weather";
import { ButtonWrapper } from "./ButtonWrapper";

interface AppProps {
  data: WeatherData;
}

// Renders weather data accpeted as props
function ListData({ data }: AppProps) {
  const [isCelsius, setIsCelsius] = useState<boolean>(true); // For toggling temperature unit
  const [temperature, setTemperature] = useState<number>(data?.temperature);

  // Updates isCelsius based on user actions
  useEffect(() => {
    if (isCelsius === false && data !== undefined) {
      setTemperature((data.temperature * 9) / 5 + 32);
    } else if (isCelsius === true && data !== undefined) {
      setTemperature(data.temperature);
    }
  }, [isCelsius, data, data?.temperature]);

  return (
    <div>
      <ButtonWrapper
        role="toggleButton"
        onClick={() => {
          isCelsius === true ? setIsCelsius(false) : setIsCelsius(true);
        }}
        title={`Switch to ${isCelsius === true ? "Farenheit?" : "Celsius?"}`}
      />
      <ul role="weatherData">Temperature: {temperature}</ul>
      <ul role="weatherData">Humidity: {data?.humidity}</ul>
      <ul role="weatherData">WindSpeed: {data?.windSpeed}</ul>
    </div>
  );
}

export default ListData;
