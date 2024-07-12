import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ weatherData }) => {
  const { temp, rh, weather, city_name } = weatherData;
  const description = weather.description;

  return (
    <Card className='m-5'>
      <CardContent  className='bg-orange-400'>
        <Typography variant="h5">{city_name}'s Current Weather</Typography>
        <Typography variant="h6">{temp}°C</Typography>
        <Typography>{description}</Typography>
        <Typography>Humidity: {rh}%</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
















