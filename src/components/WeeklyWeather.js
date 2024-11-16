import React from 'react'
import WeeklyCard from './WeeklyCard'

function WeeklyWeather() {
  return (
    <div className='max-h-48 flex flex-row gap-4 mt-24 md:px-10 px-4'>
      <WeeklyCard />
      <WeeklyCard />
      <WeeklyCard />
      <div className='hidden sm:flex gap-4'>
      <WeeklyCard />
      <WeeklyCard />
      </div>

    </div>
  )
}

export default WeeklyWeather
