import './App.css';
import HomePage from './pages/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.component'
import Header from './components/header/header.components'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';


function App() {
  return (
    <div >
     <Header/>
     <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
     </Switch>
    </div>
  );
}

export default App;
