import React from 'react'

const AcceptTask = ({data}) => {
    
  return (
    
        
        <div className=' flex-shrink-0 p-5 bg-yellow-300 h-full w-[300px] rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-white font-semibold px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-slate-700'>{data.date}</h4>
            </div>
            <div>
                <h2 className='mt-5 text-2xl font-semibold text-black'>{data.title}</h2>
                <p className='mt-2 text-sm text-black'>{data.description}</p>

               

            </div>

            <div className='flex justify-between mt-5'>
                <button className='bg-green-500 text-sm py-1 px-2'>Marked as Done</button>
                <button className='bg-red-500 text-sm py-1 px-2'>Marked as Failed</button>
            </div>
        


          
        </div>
    
  )
}

export default AcceptTask