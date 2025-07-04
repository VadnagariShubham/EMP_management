import React, { useContext, useState } from 'react';
import { Authcontext } from '../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData] = useContext(Authcontext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newtask, setNewTask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
      
        // Create a task object
        const newTask = {
          taskTitle,
          taskDate,
          taskDescription,
          category,
          active: false,
          newTask: true,
          failed: false,
          completed: false,
        };

             
        console.log("New Task to be added:", newTask); // Debug: Verify task creation
      
        // Copy userData to avoid mutating state directly
        const updatedUserData = [...userData];
      
        // Assign the task to the employee
        let taskAssigned = false; // Track if assignment succeeds
        updatedUserData.forEach((employee) => {
          if (employee.firstName === asignTo) {
            console.log("Assigning task to:", employee.firstName); // Debug: Check assignment
            employee.tasks.push(newTask); // Push new task to tasks array
            employee.taskCounts.newTask += 1; // Increment newTask count
            taskAssigned = true;
          }
        });
      
        if (!taskAssigned) {
          console.error("Employee not found for assignment!"); // Debug: Log error
          alert("Employee not found! Please check the name and try again.");
          return;
        }
      
        // Update state and localStorage
        setUserData(updatedUserData);
        localStorage.setItem("employees", JSON.stringify(updatedUserData));
      
        console.log("Updated userData:", updatedUserData); // Debug: Check updated state
      
        // Reset form fields
        setTaskTitle("");
        setTaskDescription("");
        setTaskDate("");
        setCategory("");
        setAsignTo("");
      };
      
      
      
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}className='flex flex-wrap items-start justify-between' action="">

                    <div className='w-1/2'>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input
                            value={taskTitle}
                            onChange={(e)=>{
                                setTaskTitle(e.target.value);
                            }}
                            
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design Making' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input 
                            value={taskDate}
                            onChange={(e)=>{
                                setTaskDate(e.target.value);
                            }}
                            className=' text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                        </div>
                       

                        <div>
                            <h3  className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                            <input
                            value={asignTo}
                            onChange={(e)=>{
                                setAsignTo(e.target.value);
                            }}
                             className=' text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
                        </div>


                        <div>
                            <h3  className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input
                            value={category}
                            onChange={(e)=>{
                                setCategory(e.target.value);
                            }}
                             className=' text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design or development etc...' />
                        </div>
                    </div>


                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea
                        value={taskDescription}
                        onChange={(e)=>{
                            setTaskDescription(e.target.value);
                        }}
                         className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                    </div>



                    <button className='bg-emerald-400 text-black font-semibold py-3 hover:bg-emerald-700 hover:text-white px-5 rounded text-sm mt-4 w-full'>Create Task</button>

                </form>
            </div>
  )
}

export default CreateTask