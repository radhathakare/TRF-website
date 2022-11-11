import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Error404 from './Components/Error404';
import Error500 from './Components/Error500';
import Homepage from './Components/Homepage';
import Alumini from './Components/Alumini';
import Projects from './Components/Projects';
import Team from './Components/Team';
import DevelopersPage from './Components/DevelopersPage'
import Achievements from './Components/Achievements';
import Blogs from './Components/Blogs';

function App() {
  return (
    <>
    <div className="App">
      {/* <NavBar /> */}
      {/* <Homepage/> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} /> 
          <Route exact path="/404" component={Error404} />
          <Route exact path="/500" component={Error500} />
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/alumini" component={Alumini} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/developers" component={DevelopersPage} />
        </Switch>
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
