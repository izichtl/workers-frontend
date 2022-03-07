import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/AuthContext';
// import Button from '@mui/material/Button';
// import Footer from './Footer'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



export default function ToolBar(props) {
  const { toggleDrawer, open,  } = props;
  const { handleLogout } = useContext(Context);
  return (
    <Toolbar
      sx={{
        pr: '24px', // keep right padding when drawer closed
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: '36px',
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Maxx-Workers
      </Typography>
        <IconButton
          color="inherit"
          onClick={handleLogout}
          >
          <Typography
            component="h4"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
          Sair  
          </Typography>
          <ExitToAppIcon />
        </IconButton>
    </Toolbar>
  )
} 

