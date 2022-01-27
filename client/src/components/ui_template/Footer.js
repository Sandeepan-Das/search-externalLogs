import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SvgComponent from "./Logo";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          <SvgComponent />
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
