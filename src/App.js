import './App.css';
import {Route} from 'react-router-dom';
import Login from './Components/Login/login';
import SignUp from './Components/Login/signup';
import Video from './Components/Video/Video.js';
import Error from './Components/Error/Error.js';
import {Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = '/video' component = {Video} />
        <Route path = '/login' component = {Login} />
        <Route path = '/signup' component = {SignUp} />
        <Route path = '/watch/:watchId' component = {Video} />
        <Route component = {Error}/>

      </Switch>
    </div>
  );
}

export default App;
