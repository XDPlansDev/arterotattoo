import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'; // Verifique se está importando do local correto

function MyApp({ Component, pageProps }) {
  // Definindo o tema com a paleta e fontes
  const theme = createTheme({
    palette: {
      mode: 'light', // ou 'dark' dependendo do tema que você preferir
      primary: {
        main: '#1976d2', // Cor principal (exemplo: azul)
      },
      secondary: {
        main: '#9c27b0', // Cor secundária (exemplo: roxo)
      },
    },
    typography: {
      fontWeightBold: 700, // Peso de fonte bold
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Essencial para aplicar estilos globais do MUI */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
