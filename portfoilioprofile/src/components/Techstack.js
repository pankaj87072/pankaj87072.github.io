import React from 'react'

const Techstack = ({tech}) => {
  return (
    <div className='w-full  border border-solid h-fit border-teal-400 rounded-lg m-1 '>
      <div className='text-teal-300 text-start m-1'>{tech.techhead}</div>
      <div className='flex'>
      <div className='text-teal-300 text-center flex items-start '><div className='p-1 m-1  text-white rounded-lg'>{tech.techuse}</div></div>
      {/* <div className='text-teal-300 text-center flex items-start '><div className='p-1 m-1  text-white rounded-lg'>{tech.techuse}</div></div> */}
    </div>
    </div>
  )
}

export default Techstack;
