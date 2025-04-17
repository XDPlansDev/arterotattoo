import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "white", py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">About</Typography>
            <Typography variant="body2">
              Learn more about XD Press and how we help businesses grow.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              About
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Services
            </Link>
            <Link href="#" color="inherit" display="block">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">Email: contact@xdpress.com</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
