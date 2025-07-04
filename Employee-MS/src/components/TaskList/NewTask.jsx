import React from 'react'

const NewTask = ({data}) => {
  return (
   
         <div className=' flex-shrink-0 p-5 bg-pink-400 h-full w-[300px] rounded-xl'>
        <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-white font-semibold px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-slate-700'>{data.date}</h4>
            </div>
            <div>
                <h2 className='mt-5 text-2xl font-semibold text-black'>{data.title}</h2>
                <p className='mt-2 text-sm text-black'>{data.description}</p>
            </div>

            <div className='mt-4'>
            <button className='bg-green-500'>Accept Task</button>
        </div>
        </div>

 
  )
}

export default NewTask