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

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  borderRadius: '20px',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(200, 200, 200, 0.8)',
  },
}));

const ModeText = styled(Typography)(({ theme }) => ({
  marginLeft: '8px',
  fontWeight: 'bold',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
}));

const ThemeToggleButton = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

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