import React from 'react'
import HourlyCard from './HourlyCard'

function HourlyWeather() {
  return (
    <div className='mt-4'>
      <h1>Hourly Forcast</h1>
      <div className='flex flex-row w-full justify-center flex-wrap overflow-hidden max-h-96 mt-4'>
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />



      </div>

    </div>
  )
}

export default HourlyWeather
