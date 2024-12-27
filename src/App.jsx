
import {BrowserRouter as Router , Route , Routes }from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import Practice from './Components/Practice';
import Metro from './Components/Metro';



function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/task1' element={<Task1/>}/>
        <Route path='/task2' element={<Task2/>}/>
        <Route path='/task3' element={<Task3/>}/>
        <Route path='/practice' element={<Practice/>}/>
        <Route path='/metro' element={<Metro/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
      </Routes>
     </Router>
    
    </>
  )
}

export default App
