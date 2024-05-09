import { FormControlLabel, Switch  } from '@mui/material';
import React from 'react'

const DarkToggle = () => {
    // let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme")
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    }

  return (
    <>
        <FormControlLabel control={<Switch defaultChecked={theme === "dark"} onChange={(e) => switchTheme(e)}/>} label={
            <div className='Theme-switch-texts'>
                <h5 className='light-mode-text'>Light Mode</h5>
                <h5 className='dark-mode-text'>Dark Mode</h5>
            </div>
        } />
    </>
  )
}

export default DarkToggle