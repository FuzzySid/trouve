import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Notes from './pages/Notes/Notes';
import Create from './pages/Create/Create';
import {createMuiTheme,ThemeProvider} from '@material-ui/core';
import colors from './constants/colors';

const theme=createMuiTheme({
  palette:colors,
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700
  }
})

function App() {
  return (
   <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route exact path="/">
              <Notes/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
        </Router>
   </ThemeProvider>
   
  );
}

export default App;
