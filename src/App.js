import './App.css';
import {Route} from 'react-router-dom';
import Login from './Components/Login/login';
import SignUp from './Components/Login/signup';
import Dashboard from './Components/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <h1>
        MeTube
      </h1>
      <Route path = '/login' component = {Login} />
      <Route path = '/signup' component = {SignUp} />
      <Route path= '/home' component = {Dashboard}/>
    </div>
  );
}

export default App;
