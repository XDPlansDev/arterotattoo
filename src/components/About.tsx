import React from "react";
import { Container, Typography, Grid, Box, Card, CardContent, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#f9f9f9",
        backgroundImage: 'url("/images/tattoo-pattern-white.png")',
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#111",
              textShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            Sobre Rafael Artero
          </Typography>
          <Typography variant="h6" sx={{ color: "#555", maxWidth: 700, mx: "auto", mt: 2 }}>
            Tatuagens autorais em um ambiente acolhedor e criativo. Expressando sua identidade com arte na pele.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Missão */}
          <Grid item xs={12} md={4}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: 4,
                  px: 2,
                  py: 4,
                  backgroundColor: "#fff",
                }}
              >
                <CardContent>
                  <Avatar
                    src="/icons/mission.png"
                    sx={{ width: 64, height: 64, mx: "auto", mb: 2 }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    Missão
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    Criar um espaço acolhedor e artístico onde cada cliente sinta confiança, respeito e liberdade para se expressar.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Visão */}
          <Grid item xs={12} md={4}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: 4,
                  px: 2,
                  py: 4,
                  backgroundColor: "#fff",
                }}
              >
                <CardContent>
                  <Avatar
                    src="/icons/vision.png"
                    sx={{ width: 64, height: 64, mx: "auto", mb: 2 }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    Visão
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    Ser uma referência em tatuagens autorais, onde cada trabalho é feito com autenticidade, técnica e dedicação.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Valores */}
          <Grid item xs={12} md={4}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: 4,
                  px: 2,
                  py: 4,
                  backgroundColor: "#fff",
                }}
              >
                <CardContent>
                  <Avatar
                    src="/icons/values.png"
                    sx={{ width: 64, height: 64, mx: "auto", mb: 2 }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    Valores
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    Respeito, autenticidade, criatividade e atenção a cada detalhe – esses são os pilares da Artero Tattoo.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
