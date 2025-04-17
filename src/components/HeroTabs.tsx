// components/HeroTabs.js

import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Button, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const slides = [
  {
    title: "Transforme suas ideias em realidade",
    description: "Seja visto, seja único, seja incrível. Acesse agora e descubra o que podemos fazer por você.",
    image: "/images/skull.jpeg"
  },
  {
    title: "Descubra o melhor do design",
    description: "Designs exclusivos, feitos sob medida para você. Não perca essa chance de brilhar.",
    image: "/images/bird.jpeg"
  },
  {
    title: "Inspire sua criatividade",
    description: "Descubra novos estilos e tendências. O design está esperando por você.",
    image: "/images/full-body.jpeg"
  }
];

const HeroTabs = () => {
  const [active, setActive] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        py: 10,
        position: 'relative',
        backgroundColor: '#000',
        backgroundImage: `url(${slides[active].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // escurece a imagem
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Tabs como botões no topo */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            mb: 6,
            gap: 2,
          }}
        >
          {slides.map((slide, index) => (
            <Button
              key={index}
              onClick={() => setActive(index)}
              variant={active === index ? 'contained' : 'outlined'}
              sx={{
                textTransform: 'none',
                px: 3,
                py: 1,
                borderRadius: '999px',
                fontWeight: 'bold',
                background: active === index ? '#fff' : 'transparent',
                color: active === index ? '#000' : '#fff',
                borderColor: '#fff',
                '&:hover': {
                  background: active === index ? '#e0e0e0' : 'rgba(255,255,255,0.1)',
                }
              }}
            >
              {slide.title.split(' ')[0]}
            </Button>
          ))}
        </Box>

        {/* Conteúdo animado */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
            direction={isMobile ? 'column-reverse' : 'row'}
          >
            {/* Texto */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    fontSize: { xs: '2rem', md: '3rem' },
                    color: '#fff',
                    textShadow: '0 0 15px rgba(255, 255, 255, 0.6)',
                  }}
                >
                  {slides[active].title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    color: '#ddd',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
                  }}
                >
                  {slides[active].description}
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '999px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    background: '#fff',
                    color: '#000',
                    '&:hover': {
                      background: '#e0e0e0',
                    }
                  }}
                  href="#schedule"
                >
                  Agende Já
                </Button>
              </Box>
            </Grid>

            {/* Imagem destacada (no desktop) */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: 6,
                  width: '100%',
                  maxWidth: 500,
                  margin: '0 auto',
                }}
              >
                <motion.img
                  src={slides[active].image}
                  alt={slides[active].title}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroTabs;
