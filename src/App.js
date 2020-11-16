import React from 'react';
import {NavLink, Route, BrowserRouter, Switch} from 'react-router-dom'
import Rza from './components/Rza'
import Odb from './components/Odb'
import MethodMan from './components/MethodMan'
import './App.css'
import NoYou from './NoYou.png'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <img src={NoYou} alt="" height="300px"/>
      <p>Enter The 36th Chamber with the Wu Tang Clan! <br/>
      Click one of the hit songs to see a fun fact of the Wu!
      </p>
      <div className='center'><NavLink  to='/Rza'>C.R.E.A.M</NavLink></div>
      
      <div className='center'>  <NavLink to='/Odb'>Protect Ya' Neck</NavLink></div>
    
      <div className='center'> <NavLink to='/MethodMan'>Bring Da' Ruckus</NavLink></div>
     
 
      <Switch>
        <Route path='/Odb' component={Odb} />
        <Route path='/Rza' component={Rza} />
        <Route path='/MethodMan' component={MethodMan} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

