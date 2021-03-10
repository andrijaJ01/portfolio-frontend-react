import './App.css';
import About from './components/About.js'
import Contact from './components/Contact.js'
import Nav from './components/Nav.js'
import Projects from './components/Projects.js'
import Home from './components/Home.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'





function App() {
  return (
<Router>
<div className="App">
<Nav />
<Switch>
<Route path='/' exact component={Home} />
<Route path='/about' component={About} />
<Route path='/contact' component={Contact} />
<Route path='/projects' component={Projects} />
</Switch>
</div>
</Router>
  );
}

export default App;
