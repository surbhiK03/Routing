import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Grid, TextField, Typography }from '@mui/material';

const Login = () => {
  return (
    <Box className="login-wrapper" sx={{background: 'url(img/login-bg.jpg) center no-repeat', backgroundSize: 'cover'}}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item lg={6.5} md={8} xs={12}>
          <Box className="loginForm">
            <Box className="welcomeInfo">
              <img src="img/nuance-logo-2.svg" alt=""/>
              <Typography component="h1">Wellcome!!</Typography>
            </Box>
            
            <Box className="form-container">
              <Box className="login-title">
                <Typography component="h2">Sign In</Typography>
                <Typography component="p">Sign in to continue accessing pages</Typography>
              </Box>

              <Box className="login-inputs">
                <Box className="form-group">
                  <TextField className='ThemeInput' label="Enter email" variant="outlined" placeholder='Enter email' />
                </Box>

                <Box className="form-group">
                  <TextField className='ThemeInput' label="Enter password" type="password" variant="outlined" placeholder='Enter password' />
                </Box>

                <Box className="submit-btn">
                  <Link to="/dashboard">
                    <Button variant="contained" className="ThemeBtn">Continue</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login