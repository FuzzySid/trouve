import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Notes from './pages/Notes/Notes';
import Create from './pages/Create/Create';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact npath="/">
          <Notes/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
