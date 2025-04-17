import React from "react";
import { Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import HeroTabs from '../components/HeroTabs';
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" disableGutters>
        <HeroTabs />
        <About />
        <Services />
        <Portfolio />
        {/* <Contact /> */}
        <Footer />
      </Container>
    </>
  );
}
