import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from "@mui/material/styles";
import ThemeContext from "../Context/ThemeContext";

const ThemeButtonWrapper = styled('div')({
  position: 'fixed',
  bottom: 20,
  right: 20,
  zIndex: 1000,
});

const StyledButton = styled(Button)({
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '20px', // Rounded corners
  padding: '8px 16px', // Adjust padding as needed
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});

const ModeText = styled(Typography)({
  marginLeft: '8px', // Add spacing between icon and text
  fontWeight: 'bold',
});

const ThemeToggleButton = () => {
    const { darkMode, toggleDarkMode } = useContext(
      ThemeContext
    ); // Access darkMode and toggleDarkMode
  
    return (
      <ThemeButtonWrapper>
        <StyledButton onClick={toggleDarkMode}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          {darkMode ? (
            <ModeText>Light Mode</ModeText>
          ) : (
            <ModeText>Dark Mode</ModeText>
          )}
        </StyledButton>
      </ThemeButtonWrapper>
    );
  };

export default ThemeToggleButton;