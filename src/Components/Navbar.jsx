import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";

// Styled Components
const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  color: "black",
  boxShadow: "none",
  paddingLeft: "16px",
  paddingRight: "16px",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
});

const StyledMenuButton = styled(IconButton)({
  display: "block",
  marginRight: "16px",
});

const StyledLogo = styled(Typography)({
  fontWeight: "bold",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
});

const InfinityText = styled("span")({
  color: "#4A4A4A", // Dark Gray
});

const EnergyText = styled("span")({
  color: "#A0A0A0", // Light Gray
});

const StyledNavLinks = styled(Box)({
  display: "flex",
  gap: "24px",
  alignItems: "center",
});

const StyledMenuItem = styled(Button)({
  fontSize: "14px",
  fontWeight: 700,
  fontFamily: "monospace",
  textTransform: "none",
  color: "black",
  "&:hover": {
    backgroundColor: "#4CAF50", 
    color: "white",
  },
});

const StyledGreenButton = styled(Button)({
  backgroundColor: "#4CAF50 !important",
  color: "white !important",
  marginLeft: "16px",
  marginRight: "16px",
  textTransform: "none",
});

const UserInfo = styled(Typography)({
  color: "gray",
  marginRight: "16px",
  display: "flex",
  alignItems: "center",
  width:'120px',
  "&:hover": {
    backgroundColor: "#4CAF50", 
    color: "white",
  },
});

const UserNameLogout = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end", 
  cursor:'pointer'

});

const UserName = styled(Typography)({
  fontWeight: "bold",
  "&:hover": {
    color: "#4CAF50",
  },
});

const LogoutButton = styled(Button)({
  color: "inherit",
  padding: 0, 
  marginTop: 4, 
  fontSize: '0.7rem', 
  "&:hover": {
    color: "#4CAF50",
  },

  
});

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
          <Divider orientation="vertical" sx={{ margin: '0 8px', height: '20px' }} />
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