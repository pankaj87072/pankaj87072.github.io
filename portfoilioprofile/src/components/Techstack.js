import React from 'react'

const Techstack = ({tech}) => {
  return (
    <div className='w-full border border-solid h-fit border-teal-400 rounded-lg my-2'>
      <div className='text-teal-300 text-start m-1 text-sm sm:text-base'>{tech.techhead}</div>
      <div className='flex flex-wrap'>
        <div className='text-teal-300 text-start flex items-start flex-wrap'>
          <div className='p-1 m-1 text-white rounded-lg text-xs sm:text-sm'>{tech.techuse}</div>
        </div>
      </div>
    </div>
  )
}

export default Techstack;