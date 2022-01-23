import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TableData({datas}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SERVICETAGFILENAME</StyledTableCell>
            <StyledTableCell align="right">BUSUNITID</StyledTableCell>
            <StyledTableCell align="right">GPO_ORDER</StyledTableCell>
            <StyledTableCell align="right">SALESORDNUM</StyledTableCell>
            <StyledTableCell align="right">CUSNUM</StyledTableCell>
            <StyledTableCell align="right">TIME</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => (
            <StyledTableRow key={data.SERVICETAGFILENAME}>
              <StyledTableCell component="th" scope="row">
                {data.SERVICETAGFILENAME}
              </StyledTableCell>
              <StyledTableCell align="right">{data.BUSUNITID}</StyledTableCell>
              <StyledTableCell align="right">{data.GPO_ORDER}</StyledTableCell>
              <StyledTableCell align="right">{data.SALESORDNUM}</StyledTableCell>
              <StyledTableCell align="right">{data.CUSNUM}</StyledTableCell>
              <StyledTableCell align="right">{data.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}