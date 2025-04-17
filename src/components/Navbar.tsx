import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import DrawIcon from "@mui/icons-material/Draw";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const menuItems = ["Início", "Sobre", "Serviços", "Portfólio", "Contato"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontFamily: "cursive", display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}
      >
        <DrawIcon />
        Artero Tattoo
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              color: "#fff",
              backgroundColor: "#25D366",
              borderRadius: 1,
              mt: 1,
              mx: 2,
              "&:hover": { backgroundColor: "#1ebe5b" },
            }}
            href="https://wa.me/SEUNUMEROAQUI" // substitua pelo número do Artero Tattoo
            target="_blank"
          >
            <WhatsAppIcon sx={{ mr: 1 }} />
            WhatsApp
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontFamily: "cursive",
          }}
        >
          <DrawIcon />
          Artero Tattoo
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              PaperProps={{ sx: { width: 250 } }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItems.map((item) => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/SEUNUMEROAQUI"
              target="_blank"
              sx={{
                backgroundColor: "#25D366",
                "&:hover": { backgroundColor: "#1ebe5b" },
              }}
            >
              WhatsApp
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
