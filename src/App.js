import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import SignupPage from './pages/signup/signup.component';
import Homepage from './pages/homepage/homepage.component';
import SigninPage from './pages/signin/signin.component';
import { currentUserSelector } from './redux/user/user.selectors';
import SnackbarComponent from './components/snackbar/snackbar.component';
import UserHome from './pages/user-home/user-home.component';
import IfLoggedInHOC from './components/hoc-check-if-logged-in/check-if-logged-in.component';

function App({ currentUser }) {
  return (
    <div className='app'>
      <SnackbarComponent />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/signup' exact component={SignupPage} />
        <Route 
          path='/signin' 
          exact  
          render={() => currentUser ? (<Redirect to='/home' />) : (<SigninPage />) } 
        />
        <Route path='/home' exact component={UserHome} />
      </Switch>
    </div>
  )
};


const mapStateToProps = state => ({
  currentUser: currentUserSelector(state)
});

export default connect(mapStateToProps)(IfLoggedInHOC(App));
