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
  const keys = Object.keys(datas.data);
  console.log(keys);
  const dataArray = [];
  {for (const key in datas) {
    for (const innerKey in datas[key]) {
        dataArray.push(datas[key][innerKey])
    }
    console.log(dataArray);
}}



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
        
          {dataArray.map((data,index) => (
            data.SERVICETAGFILENAME == 'Not Found' ? (
              <StyledTableRow key={index}>

              <StyledTableCell component="th" scope="row" sx={{color: 'red'}}>
                {data.SERVICETAGFILENAME} - {keys[index]}
              </StyledTableCell>
              <StyledTableCell align="right">..</StyledTableCell>
              <StyledTableCell align="right">..</StyledTableCell>
              <StyledTableCell align="right">..</StyledTableCell>
              <StyledTableCell align="right">..</StyledTableCell>
              <StyledTableCell align="right">..</StyledTableCell>
            </StyledTableRow>
            ): (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {data.SERVICETAGFILENAME}
              </StyledTableCell>
              <StyledTableCell align="right">{data.BUSUNITID ? `${data.BUSUNITID}` : 'null'}</StyledTableCell>
              <StyledTableCell align="right">{data.GPO_ORDER ? `${data.GPO_ORDER}` : 'null'}</StyledTableCell>
              <StyledTableCell align="right">{data.SALESORDNUM ? `${data.SALESORDNUM}` : 'null'}</StyledTableCell>
              <StyledTableCell align="right">{data.CUSNUM ? `${data.CUSNUM}` : 'null'}</StyledTableCell>
              <StyledTableCell align="right">{data.time ? `${data.time}` : 'null'}</StyledTableCell>
            </StyledTableRow>)
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}