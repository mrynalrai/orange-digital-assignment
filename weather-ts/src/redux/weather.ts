import { createSlice } from '@reduxjs/toolkit'

type Option<WeatherData> = WeatherData | undefined;

export interface WeatherData {
  temperature: number,
  humidity: number,
  windSpeed: number
}

export interface WeatherState {
  city: string,
  data: Option<WeatherData>
}

const initialState: WeatherState = {
  city: "",
  data: undefined
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateCity: (state, action) => {
      state.city = action.payload; 
    },
    updateData: (state, action) => {
      state.data = {
        temperature: action.payload.temperature,
        humidity: action.payload.humidity,
        windSpeed: action.payload.windSpeed,
      };
    }
  }
})

export const { updateCity, updateData } = weatherSlice.actions

export default weatherSlice.reducer