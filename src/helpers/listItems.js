import * as React from 'react';
import {
  Link
} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <Link href="/dashboard" >
        <DashboardIcon />
        </Link>
      </ListItemIcon>
      <Link href="/dashboard" >
        <ListItemText primary="Home" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Link href="/professional" >
        <PeopleIcon />
        </Link>
      </ListItemIcon>
      <Link href="/professional" >
        <ListItemText primary="Profissionais" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Link href="/professional/cadastro" >
        <PersonAddIcon />
        </Link>
      </ListItemIcon>
      <Link href="/professional/cadastro" >
        <ListItemText primary="Cadastrar Prof." />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Link href="/categoria" >
          <PermIdentityIcon />
        </Link>
      </ListItemIcon>
      <Link href="/categoria" >
        <ListItemText primary="Categoria" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Link href="/categoria/cadastro" >
          <CreateSharpIcon />
        </Link>
      </ListItemIcon>
        <Link href="/categoria/cadastro" >
          <ListItemText primary="Cadastro Categoria" />
        </Link>
    </ListItemButton>
  </React.Fragment>
);