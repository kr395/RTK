import React from 'react'

const Stats = ({totalCount}) => {
  return (
    <div className='w-full h-[200px] flex flex-col justify-center items-center text-3xl'>Total Count: {totalCount}</div>
  )
}

export default Stats