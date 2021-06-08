import './App.css';
import {useEffect, useState} from 'react';
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
import { TrouveThemeProvider } from './context/themecontext/Theme';
import { getToken, onMessageListener } from './firebase.config';




function App() {
  const [{user},dispatch]=useStateValue()
  const [token,setToken]=useState()

  useEffect(()=>{
    getToken(setToken)
    onMessageListener().then(payload => {
      console.log('got->',payload);
      Notification.requestPermission().then(function(result) {
        console.log(result);
        //var notification = new Notification('To do list', { body: 'Hey! This is a sample test notification', icon:'https://trouve-e9737.web.app/static/media/trouve-logo.3a36df1c.png' });
      });
    }).catch(err => console.log('failed: ', err));
  },[])
 
  return (
  <TrouveThemeProvider>
     <SnackbarProvider maxSnack={3} anchorOrigin={{horizontal:'right',vertical:'bottom'}} autoHideDuration={2000} >
      <Router>
        {
          user  ? 
          <Switch>
              <Route exact path="/">
                <Items token={token}/>     
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
     </TrouveThemeProvider>
   
  );
}

export default App;
