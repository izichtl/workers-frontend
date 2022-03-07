import * as React from 'react';
import {
  useEffect,
} from 'react';
import { format } from 'date-fns';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TypeTable(props) {
  const { rows, types } = props;

  const handlerTimeStamp = (timestamp) => { return format(new Date(timestamp), 'dd/MM/yyyy - HH:mm')}

  useEffect(() => {
  }, [types]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>DESCRIÇÃO</TableCell>
            <TableCell align="right">SITUAÇÃO</TableCell>
            <TableCell align="right">CADASTRADA EM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.descricao}
              </TableCell>
              <TableCell align="right">{row.situacao ? 'Ativa' : 'Inativa'}</TableCell>
              <TableCell align="right">{handlerTimeStamp(row.createdat)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
