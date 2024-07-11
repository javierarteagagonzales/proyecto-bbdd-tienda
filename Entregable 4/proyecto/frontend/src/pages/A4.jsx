import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Garea from "../components/garea";
export default function A4() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Área de Almacén de Tránsito</h1>
          <Typography paragraph>Bienvenido al área</Typography>
        </Box>
      </Box>
      <div>
        <Garea />
      </div>
    </>
  );
}
