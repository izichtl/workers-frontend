import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from '../helpers/listItems';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';


export default function SideBar(props) {
  const { toggleDrawer } = props;
  return (
    <React.Fragment>
      <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
      }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        </List>
    </ React.Fragment>
  )
} 






