import React from 'react'
function WeeklyCard({day,temp,status,classes}) {
  return (
    <div className={`flex flex-col flex-wrap gap-3 min-w-36 overflow-hidden h-48 py-8 rounded-3xl cursor-pointer hover:shadow-md transition ${classes}`}>
        <span className='block min-w-full text-xl font-semibold w-full text-center'>{day}</span>
        <span className='block min-w-full text-text-dark text-2xl text-center'>{temp}°</span>
        <span className='block min-w-full text-border-light max-h-20 text-wrap text-sm text-center overflow-hidden'>{status}</span>
    </div>
  )
}

export default WeeklyCard
