import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Notes from './pages/Notes/Notes';
import Create from './pages/Create/Create';
import {createMuiTheme,ThemeProvider} from '@material-ui/core';
import colors from './constants/colors';
import LandingPage from './pages/LandingPage/Landing';
import { useStateValue } from './context/usercontext/AuthProvider';
import NotFound from './pages/404/404';
import Layout from './components/layout/Layout';

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
  const [{user},dispatch]=useStateValue()
  console.log(user)
  return (
   <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            
            <Route exact path="/">
              {
                user? <Layout><Notes/></Layout>  : <LandingPage/>
              }              
            </Route>
            <Route path="/create">
              {user ? <Layout><Create/></Layout> : <NotFound/> }
            </Route>
          </Switch>
        </Router>
   </ThemeProvider>
   
  );
}

export default App;
