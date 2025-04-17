import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";

const projects = [
  { title: "Project 1", description: "Description of project 1" },
  { title: "Project 2", description: "Description of project 2" },
  { title: "Project 3", description: "Description of project 3" },
];

const Portfolio = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ padding: 3, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body1">
                {project.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
