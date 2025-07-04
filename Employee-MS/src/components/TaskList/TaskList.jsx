import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'

import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'




const TaskList = ({data}) => {
    console.log(data);
  return (

  
    <div id='Tasklist' className='h-[55%] flex overflow-x-auto items-center justify-start flex-nowrap py-5 gap-5 w-full mt-10'>
       
        {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return <AcceptTask key ={idx} data={elem}/>

            }

            if(elem.newTask){
                return <NewTask key ={idx} data={elem}/>

            }

            if(elem.completed){
                return <CompletedTask key ={idx} data={elem}/>

            }

            if(elem.failed){
                return <FailedTask key ={idx} data={elem}/>

            }
        })}
       
    </div>

  )
}

export default TaskList