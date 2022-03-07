import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
        <React.Fragment>
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
          <Link color="inherit" href="https://izichtl.com/">
            izichtl
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        </React.Fragment>
      );
} 

