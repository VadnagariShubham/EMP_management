import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 '>
        {/* //box 1 */}
        <div className='px-9 py-7 rounded-xl w-[35%] bg-red-600'>
        <h2 className='text-white text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='px-10 py-7 rounded-xl w-[35%] bg-blue-600'>
        <h2 className='text-white text-3xl font-semibold'>{data.taskCounts.completedTask}</h2>
        <h3 className='text-xl font-medium'>completed Task</h3>
        </div>

        <div className='px-10 py-7 rounded-xl w-[35%] bg-green-600'>
        <h2 className='text-white text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>

        <div className='px-10 py-7 rounded-xl w-[35%] bg-yellow-500'>
        <h2 className='text-white text-3xl font-semibold'>{data.taskCounts.failedTask}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
          

    </div>
  )
}

export default TaskNumber