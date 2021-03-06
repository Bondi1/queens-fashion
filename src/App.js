import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()
  
    this.state = {
       currentUser : null
    }
  }
 
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser:user })
      console.log(user);
      })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render (){
    return(
    <div>
     <Header/>
     <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
     </Switch>
    </div>
    );
  }
    
}

export default App;
