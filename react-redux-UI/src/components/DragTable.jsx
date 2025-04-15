import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Box } from '@mui/material';

// TableRow component that is draggable
const DraggableTableRow = ({ row, index, moveRow }) => {
  const [, drag] = useDrag({
    type: 'ROW',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'ROW',
    hover: (item) => {
      if (item.index !== index) {
        moveRow(item.index, index);
        item.index = index;  // Update the dragged item index
      }
    },
  });

  return (
    <TableRow
      ref={(node) => drag(drop(node))}
      sx={{
        cursor: 'grab',
        transition: 'background-color 0.2s ease',
        '&:hover': {
          backgroundColor: '#f1f1f1',
        },
      }}
    >
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.age}</TableCell>
    </TableRow>
  );
};

// Main component for the table
const DraggableTable = () => {
  const [rows, setRows] = useState([
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 34 },
    { id: 3, name: 'Alice', age: 25 },
    { id: 4, name: 'Bob', age: 40 },
  ]);

  // Function to move the row
  const moveRow = (fromIndex, toIndex) => {
    const updatedRows = [...rows];
    const [movedRow] = updatedRows.splice(fromIndex, 1);
    updatedRows.splice(toIndex, 0, movedRow);
    setRows(updatedRows);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 2,
        boxShadow: 3,
        padding: 2,
      }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: '#f4f4f4' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <DraggableTableRow key={row.id} index={index} row={row} moveRow={moveRow} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

 
function App() {
  return (
    // <FileUpload />
    <DndProvider backend={HTML5Backend}>
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <DraggableTable />
        </Grid>
      </Grid>
    </Box>
  </DndProvider>

   
  );
}

export default App;
