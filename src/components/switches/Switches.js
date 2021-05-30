import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { grey, purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTrouveTheme } from '../../context/themecontext/Theme';


const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 36,
    height: 19,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#fff',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 16,
    height: 16,
    backgroundColor: grey[300]
  },
  track: {
    borderRadius: 26 / 2,
    border: `0px solid ${theme.palette.grey[400]}`,
    backgroundColor: '#52d869',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function Switches() {
  const {theme,themeType,toggleTheme}=useTrouveTheme()
  const [state, setState] = React.useState({
    checked: theme!=='light',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    toggleTheme()
  };

  useEffect(()=>{
    setState({
      checked: themeType!=='light'
    })
  },[themeType])

  return (
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch checked={state.checked} onChange={handleChange} name="checked" />}
        label={<span style={{marginLeft:17}}>{state.checked ? "Dark Theme" : "Light Theme"}</span>}
      />
    </FormGroup>
  );
}