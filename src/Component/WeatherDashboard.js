import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import ForecastCard from './ForecastCard';

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const apiKey = 'be5734aac08f40aeb310e42cc554017d';

  const handleSearch = async () => {
    try {
      const weatherResponse = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`
      );
      setWeatherData(weatherResponse.data.data[0]);
 console.log(weatherData);
      const forecastResponse = await axios.get(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=7&key=${apiKey}`
      );
      setForecastData(forecastResponse.data.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Container  className='p-8'>
      <Typography variant="h4" gutterBottom>
        Weather Dashboard
      </Typography>
      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginTop: '16px' }}>
        Search
      </Button>

      {weatherData && (
        <WeatherCard weatherData={weatherData} />
      )}


      {forecastData && (
        <Grid container spacing={2} style={{ marginTop: '16px' }}>
          <div className='text-3xl'>7 Day Forecast</div>
          {forecastData.map((day, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ForecastCard dayData={day} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default WeatherDashboard;




















