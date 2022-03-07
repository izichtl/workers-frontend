import * as React from 'react';
import {
  useEffect,
} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function DenseTable(props) {
  const { rows, types } = props;

  const handlerTypes = (typeId, typesArr) => {
    let response = '';
    typesArr.forEach(element => {
      if (element.id === typeId) response = element.descricao;
    });
    return response;
  }

  useEffect(() => {
  }, [types]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>NOME</TableCell>
            <TableCell align="right">TELEFONE</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">TIPO PROFISSIONAL</TableCell>
            <TableCell align="right">SITUAÇÃO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.telefone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{handlerTypes(row.tipoprofissional, types)}</TableCell>
              <TableCell align="right">{row.situacao ? 'Ativo' : 'Inativo'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
