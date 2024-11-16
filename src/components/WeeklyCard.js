import React from 'react'
function WeeklyCard() {
  return (
    <div className='flex flex-col gap-3 min-w-10 px-8 h-48 py-8 rounded-3xl cursor-pointer border-border-light border hover:shadow-md transition'>
        <h2 className='text-2xl font-semibold'>Today</h2>
        <p className='text-text-dark text-4xl ml-2'>25°</p>
        <p className='text-border-light'>Cloudly</p>
    </div>
  )
}

export default WeeklyCard
