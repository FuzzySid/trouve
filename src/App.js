import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Items from './pages/Items/Items';
import Create from './pages/Create/Create';
import {createMuiTheme,ThemeProvider} from '@material-ui/core';
import colors from './constants/colors';
import LandingPage from './pages/LandingPage/Landing';
import { useStateValue } from './context/usercontext/AuthProvider';
import NotFound from './pages/404/404';
import Layout from './components/layout/Layout';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Edit from './pages/Edit/Edit';
import Saved from './pages/Items/Saved';
import Trash from './pages/Items/Trash';

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
  const [items,setItems]=useState([])

  return (
   <ThemeProvider theme={theme}>
     <SnackbarProvider maxSnack={3} anchorOrigin={{horizontal:'right',vertical:'bottom'}} autoHideDuration={2000} >
      <Router>
        {
          user  ? 
          <Switch>
              
              <Route exact path="/">
                <Items/>     
              </Route>
              <Route path="/create">
                <Layout><Create/></Layout> 
              </Route>
              <Route path="/edit">
                  <Layout><Edit/></Layout> 
              </Route>
              <Route path="/saved">
                <Saved/>
              </Route>
              <Route path="/trash">
                <Trash/>
              </Route>
              <Route>
                <NotFound/>
              </Route>
          </Switch>
          :
          <LandingPage/>
        }
          
        </Router>
     </SnackbarProvider>

   </ThemeProvider>
   
  );
}

export default App;
