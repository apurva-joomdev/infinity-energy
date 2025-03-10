import React, { useContext } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, createTheme } from "@mui/material/styles";
import ThemeToggleButton from "./ThemeTogglerButton";
import ThemeContext from "../Context/ThemeContext";

const defaultTheme = createTheme();

const RootBox = styled(Box)(({ theme, darkMode }) => ({
  width: "100%",
  minHeight: "65vh",
  marginTop: "30px",
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: darkMode ? "#121212" : "white", // Dark mode background
  color: darkMode ? "white" : "black", // Dark mode text color
}));

const HeaderBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: defaultTheme.spacing(3),
});

const WelcomeTypography = styled(Typography)(({ darkMode }) => ({
  marginBottom: defaultTheme.spacing(2),
  color: darkMode ? "white" : "black",
}));

const BannerBox = styled(Box)(({ darkMode }) => ({
  backgroundColor: darkMode ? "#333" : "#FFF9C4", // Dark mode banner background
  padding: defaultTheme.spacing(2),
  marginBottom: defaultTheme.spacing(3),
  textAlign: "center",
  border: "1px solid #00000033",
  color: darkMode ? "white" : "black",
}));

const NoResultBox = styled(Box)(({ darkMode }) => ({
  width: "94%",
  marginTop: "40px",
  margin: "0 auto",
  backgroundColor: darkMode ? "#1E1E1E" : "white", 
  borderRadius: defaultTheme.spacing(2),
  boxShadow: 1,
  textAlign: "center",
  padding: defaultTheme.spacing(5),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexGrow: 1,
  color: darkMode ? "white" : "black",
}));

const SearchIconButton = styled(IconButton)({
  marginBottom: defaultTheme.spacing(2),
  backgroundColor: "#F0F0F0",
  padding: defaultTheme.spacing(3),
  borderRadius: "50%",
});

const SearchIconStyled = styled(SearchIcon)(({ darkMode }) => ({
  fontSize: 40,
  color: darkMode ? "#A0A0A0" : "#9E9E9E", 
}));

const NoResultTitle = styled(Typography)(({ darkMode }) => ({
  fontWeight: "bold",
  color: darkMode ? "#8BC34A" : "green", 
}));

const NoResultText = styled(Typography)(({ darkMode }) => ({
  color: darkMode ? "#B0B0B0" : "#757575", 
  marginTop: defaultTheme.spacing(1),
}));

const FooterBox = styled(Box)(({ darkMode }) => ({
  textAlign: "center",
  marginTop: defaultTheme.spacing(3),
  color: darkMode ? "#A0A0A0" : "#9E9E9E", 
}));

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <RootBox darkMode={darkMode}>
        <HeaderBox>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Dashboard
          </Typography>
          <Button variant="contained" color="success">
            + New Lead
          </Button>
        </HeaderBox>

        <WelcomeTypography variant="subtitle1" darkMode={darkMode}>
          Apurva Rajpurohit, Welcome back!
        </WelcomeTypography>

        <BannerBox darkMode={darkMode}>
          <Typography variant="body2">
            This is a sample banner. we can add important announcements here.
          </Typography>
        </BannerBox>

        <NoResultBox darkMode={darkMode}>
          <SearchIconButton>
            <SearchIconStyled darkMode={darkMode} />
          </SearchIconButton>
          <NoResultTitle variant="h6" darkMode={darkMode}>
            Sad no result!
          </NoResultTitle>
          <NoResultText variant="body2" darkMode={darkMode}>
            We have no data there for you, maybe you have no data yet.
          </NoResultText>
        </NoResultBox>
      </RootBox>

      <FooterBox darkMode={darkMode}>
        <Typography variant="caption">
          © 2025 Apollo by Infinity Solar Systems. All rights reserved.
        </Typography>
      </FooterBox>

      <ThemeToggleButton />
    </>
  );
};

export default Dashboard;