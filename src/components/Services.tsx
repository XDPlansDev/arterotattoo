import React from "react";
import { Container, Typography, Grid, Box, Paper } from "@mui/material";

const services = [
  { title: "Website Creation", description: "Custom websites tailored to your business needs." },
  { title: "Blogging Solutions", description: "Powerful blogging platform with advanced SEO features." },
  { title: "E-commerce", description: "Build your online store with a full-featured e-commerce solution." },
];

const Services = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ padding: 3, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body1">
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
