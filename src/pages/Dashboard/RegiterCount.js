import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { format } from 'date-fns';

function preventDefault(event) {
  event.preventDefault();
}

export default function RegiterCount(props) {
  const { title, count, address } = props;
  console.log(address);
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Typography component="p" variant="h5">
        Cadastrados: {count}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {format(new Date(), 'dd/mm/yyy')}
      </Typography>
      <div>
        <Link color="primary" href={address} >
          Acessar {title}
        </Link>
      </div>
    </React.Fragment>
  );
}