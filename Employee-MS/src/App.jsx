import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { Authcontext } from './context/Authprovider';


// import AuthContext from './context/Authprovider'

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser,setLoggedInUser] = useState(null)
  // const authData = useContext(Authcontext)
  const [userData,setUserData] = useContext(Authcontext);

  useEffect(()=>{
    const loggedInUser  = localStorage.getItem('loggedInUser')
    
   if(loggedInUser){
    console.log(" user logged in  he")
   }
  })
  
 
 
  

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));

    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUser(employee); // Set the actual employee object
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
      }
    } else {
      alert('Invalid credentials');
    }
  };
  

  return (
    <>
     {!user ?<Login handleLogin={handleLogin}/>:''}
     {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data = {loggedInUser}/> : null)}
   

      
  
    </>
  );
};

export default App;
