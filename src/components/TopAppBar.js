import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BugIcon from "@mui/icons-material/BugReport";
import FilterIcon from "@mui/icons-material/FilterAlt";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function TopAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nicole's Movie List
          </Typography>
          <IconButton
            target="_blank"
            href="https://github.com/nicoppola/Movie-List-Client/issues"
            size="large"
            edge="end"
            aria-label="bug"
            sx={{ mr: 0.3 }}
          >
            <BugIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="darkMode"
            sx={{ mr: 0.3 }}
          >
            <DarkModeIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="filter"
            sx={{ mr: 0.3 }}
          >
            <FilterIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
