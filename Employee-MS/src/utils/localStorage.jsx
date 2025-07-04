localStorage.clear()
const Employees = [
  {
    id: 1,
    email: "e@e.com",
    password: "123",
    firstName: "Rajesh",
    tasks: [
      {
        title: "Prepare Monthly Report",
        description: "Compile and summarize financial data for the month.",
        date: "2025-01-10",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Update Client Database",
        description: "Add recent updates to the client profiles.",
        date: "2025-01-11",
        category: "Data Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Schedule Team Meeting",
        description: "Coordinate with team members to find a suitable time.",
        date: "2025-01-12",
        category: "Coordination",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      failedTask: 0,
      completedTask: 1,
    },
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Priya",
    tasks: [
      {
        title: "Analyze Sales Data",
        description: "Evaluate sales trends and identify key insights.",
        date: "2025-01-09",
        category: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Respond to Client Inquiries",
        description: "Address client questions and provide necessary solutions.",
        date: "2025-01-10",
        category: "Customer Service",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Organize Workshop Materials",
        description: "Prepare materials for the upcoming workshop session.",
        date: "2025-01-08",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Conduct Staff Training",
        description: "Provide training on the new software tools.",
        date: "2025-01-07",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      failedTask: 1,
      completedTask: 1,
    },
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Ananya",
    tasks: [
      {
        title: "Draft Project Proposal",
        description: "Outline key details and objectives for the new project.",
        date: "2025-01-15",
        category: "Project Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Organize Meeting Notes",
        description: "Compile notes from the previous team meetings.",
        date: "2025-01-12",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Follow Up on Payments",
        description: "Ensure all pending payments have been processed.",
        date: "2025-01-11",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      failedTask: 0,
      completedTask: 1,
    },
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstName: "Kunal",
    tasks: [
      {
        title: "Test Software Module",
        description: "Verify functionality and identify bugs in the new software module.",
        date: "2025-01-14",
        category: "Quality Assurance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare Training Slides",
        description: "Create slides for the upcoming training session.",
        date: "2025-01-09",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 0,
      failedTask: 0,
      completedTask: 1,
    },
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstName: "Neha",
    tasks: [
      {
        title: "Review Marketing Strategy",
        description: "Assess the effectiveness of the current strategy.",
        date: "2025-01-13",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Organize Event Logistics",
        description: "Handle arrangements for the upcoming corporate event.",
        date: "2025-01-11",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 0,
      failedTask: 0,
      completedTask: 1,
    },
  },
];




    const admin=  [{
      "id": 1,
      "firstname":"lala bhai",
      "email": "admin@me.com",
      "password": "123",
      "role": "superadmin",
      "permissions": ["read", "write", "delete", "update"]
    }]


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(Employees));
    localStorage.setItem('admin',JSON.stringify(admin));

}

export const getLocalStorage = ()=>{

  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return {employees,admin}


  

}



  