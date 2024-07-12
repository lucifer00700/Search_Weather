import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ForecastCard = ({ dayData }) => {
  const { temp, rh, weather, valid_date } = dayData;
  const description = weather.description;
  const date = new Date(valid_date).toLocaleDateString();

  return (
    <Card  className='m-5'>
      <CardContent  className='bg-orange-400'>
        <Typography variant="h6 ">On {date}</Typography>
        <Typography variant="h6">{temp}°C</Typography>
        <Typography>{description}</Typography>
        <Typography>Humidity: {rh}%</Typography>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;




