import React, { useContext } from 'react'
import { Authcontext } from '../context/AuthProvider'


function AllTasks() {
  const [userData,setUserData] = useContext(Authcontext)
  
  return (

    // overflow auto karvathi list jevu bani jase
    <div className='bg-[#1c1c1c] rounded p-5 mt-5 '>

      <div className='bg-red-400 mb-2 flex rounded py-2 px-4 justify-between'>
        <h2 className='w-1/5 text-lg font-medium text-black '>  Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium text-black'>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium text-black'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium text-black'>Completed Tasks</h5>
        <h5 className='w-1/5 text-lg font-medium text-black'>Failed Tasks</h5>

      </div>

     <div className=' overflow-auto'>
     {userData.map(function(elem,idx){
        return  <div key = {idx} className='border-2 border-emerald-700 mb-2 flex rounded py-2 px-4 justify-between'>
        <h2 className='w-1/5 text-lg font-medium text-white'>{elem.firstName}</h2>
        <h3 className='w-1/5 text-lg font-medium text-blue-300'>{elem.taskCounts.newTask}</h3>
        <h5 className='w-1/5 text-lg font-medium text-pink-300'>{elem.taskCounts.active}</h5>
        <h5 className='w-1/5 text-lg font-medium text-green-300'>{elem.taskCounts.completedTask}</h5>
        <h5 className='w-1/5 text-lg font-medium text-red-300'>{elem.taskCounts.failedTask}</h5>
      </div>
      })}
     </div>
     

    </div>



  )
}

export default AllTasks