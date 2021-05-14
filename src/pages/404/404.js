import { Button } from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { useHistory } from 'react-router';
import NotFoundSVG from '../../components/svg/404';
import './404.css';

export default function NotFound({}){
    const history=useHistory();
    return(
            <>
            <NotFoundSVG/>
            <div className="link-container" style={{textAlign:'center',padding:10}}>
                        <Typography variant="h4">Oops!</Typography>
                        <Typography>Either the page does not exist or you do not have sufficient permissions to access it</Typography>
                    <br/>
                    <Button  onClick={()=>history.push('/')} variant="outlined" size="large">Home</Button>
                    <br/>
            </div>
        </>
      
    )
}
