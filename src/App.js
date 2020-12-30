import './App.css';
import {Switch,Route} from 'react-router-dom';

import SignupPage from './pages/signup/signup.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
return(
  <div className='app'>
    <Switch>
      <Route path='/' exact component={Homepage} />
      <Route path='/signup' exact component={SignupPage} />
    </Switch>
  </div>
)
}

export default App;
