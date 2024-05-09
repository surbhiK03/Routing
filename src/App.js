import { Box } from '@mui/system';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './Component/Auth/Login';
import DarkToggle from './Component/Common/DarkToggle';
import Layout from './Component/Layout/Layout';
import About from './Component/Pages/About';
import Dashboard from './Component/Pages/Dashboard';
import Profile from './Component/Pages/Profile';

function App() {
  console.log("hii")
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />

        <Route element={<Layout/>}>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="about" element={<About/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
      </Routes>

      <Box sx={{display: 'none'}}><DarkToggle/></Box>
    </div>
  );
}

export default App;
