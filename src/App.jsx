
import {BrowserRouter as Router , Route , Routes }from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
