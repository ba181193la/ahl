import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FileUpload from './components/fileupload';
import AddTask from './components/AddTask'
import TasksList from './components/TasksList'
import FormikComponent from './components/formik/formik';
 
function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav> */}
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<TasksList />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/fileUpload" element={<FileUpload />} />
        <Route path="/formik" element={<FormikComponent />} />

        {/* Catch-all route for undefined paths */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App;
