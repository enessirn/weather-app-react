import React from 'react'
import DateAndLocation from './components/DateAndLocation'
import CurrentTemperature from './components/CurrentTemperature'
import WeeklyWeather from './components/WeeklyWeather'


function Container() {
  return (
    <div className='container max-w-[1200px] mx-auto bg-secondary-light h-[600px] flex justify-between rounded-3xl'>
        <div className='w-full rounded-3xl h-full'>
        <DateAndLocation />
        <CurrentTemperature />
        <WeeklyWeather /> 
        </div>

      <div className='hidden bg-text-light h-full w-2/4 lg:block rounded-3xl'>Second Layout</div>
    </div>
  )
}

export default Container
