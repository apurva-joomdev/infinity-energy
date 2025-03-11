import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import ThemeContext from "../Context/ThemeContext";

// Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "black" : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
  boxShadow: "none",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
});

const StyledMenuButton = styled(IconButton)({
  display: "block",
  marginRight: "16px",
});

const StyledLogo = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  color: theme.palette.mode === "dark" ? "white" : "black",
}));

const InfinityText = styled("span")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "white" : "#4A4A4A",
}));

const EnergyText = styled("span")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "white" : "#A0A0A0",
}));

const StyledNavLinks = styled(Box)({
  display: "flex",
  gap: "24px",
  alignItems: "center",
});

const StyledMenuItem = styled(Button)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 700,
  fontFamily: "monospace",
  textTransform: "none",
  color: theme.palette.mode === "dark" ? "white" : "black",
  "&:hover": {
    backgroundColor: "#4CAF50",
    color: "white",
  },
}));

const StyledGreenButton = styled(Button)({
  backgroundColor: "#4CAF50 !important",
  color: "white !important",
  marginLeft: "16px",
  marginRight: "16px",
  textTransform: "none",
});

const UserInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "gray" : "gray",
  marginRight: "16px",
  display: "flex",
  alignItems: "center",
  width: "120px",
  "&:hover": {
    backgroundColor: "#4CAF50",
    color: "white",
  },
}));

const UserNameLogout = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  cursor: "pointer",
});

const UserName = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.mode === "dark" ? "white" : "black",
  "&:hover": {
    color: "#4CAF50",
  },
}));

const LogoutButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "white" : "inherit",
  padding: 0,
  marginTop: 4,
  fontSize: "0.7rem",
  "&:hover": {
    color: "#4CAF50",
  },
}));

function Navbar() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledMenuButton>
          <MenuIcon />
        </StyledMenuButton>

        <StyledLogo variant="h6">
          <InfinityText>Infinity</InfinityText>
          <EnergyText>Energy</EnergyText>
        </StyledLogo>

        <StyledNavLinks>
          <StyledMenuItem>Dashboard</StyledMenuItem>
          <StyledMenuItem endIcon={<ArrowDropDownIcon />}>Leads</StyledMenuItem>
          <StyledMenuItem endIcon={<ArrowDropDownIcon />}>Manage</StyledMenuItem>
          <StyledMenuItem endIcon={<ArrowDropDownIcon />}>Profile</StyledMenuItem>
        </StyledNavLinks>

        <StyledGreenButton variant="contained">
          Announcements & Resources
        </StyledGreenButton>

        <UserInfo variant="body2">
          Mon, Mar 10 2025, 08:09:40
          <Divider orientation="vertical" sx={{ margin: "0 8px", height: "20px" }} />
        </UserInfo>

        <UserNameLogout>
          <UserName variant="body2">
            Apurva Rajpurohit
          </UserName>
          <LogoutButton>Log out</LogoutButton>
        </UserNameLogout>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Navbar;