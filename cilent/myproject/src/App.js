import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Project from './Component/Project/Project';
import Service from './Component/Service/Service';
import Career from './Component/Career/Career';
import Health from './Component/Health/Health'
import Construct from './Component/Construct/Construct';
import Engine from './Component/Engine/Engine';
import Contact from './Component/Contact/Contact';
import Login from './Component/Login/Login';
import Sign from './Component/Sign/Sign';
import Logout from './Component/Logout/Logout';
import Footer from './Component/Footer/Footer';
import{Route,Switch} from 'react-router';
function App() {
  return (
   <>
   <Navbar/>
   <Switch>
   <Route exact path='/' component={Home}></Route>
   <Route exact path='/About' component={About}></Route>
   <Route exact path='/Project' component={Project}></Route>
   <Route exact path='/Service' component={Service}></Route>
   <Route exact path='/Career' component={Career}></Route>
   <Route exact path='/Health' component={Health}></Route>
   <Route exact path='/Construct' component={Construct}></Route>
   <Route exact path='/Engine' component={Engine}></Route>
   <Route exact path='/Contact' component={Contact}></Route>
   <Route exact path='/Login' component={Login}></Route>
   <Route exact path='/Sign' component={Sign}></Route>
   <Route exact path='/Logout' component={Logout}></Route>
   </Switch>
   <Footer/>
  </>
  
  );
}

export default App;
