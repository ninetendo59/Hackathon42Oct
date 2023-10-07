// 'use client'

import ClassList from "@/components/ClassList";
import Navbar from "@/components/Navbar";
import UpcomingClassList from "@/components/UpcomingClassList";
import { Container, Box } from "@mui/material";

let container_sx = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaced-between",
  width: "100vw",
  height: "100vh",
  padding: 0,
  boxSizing: "border-box",
};

function HomePage() {
  return (
    <Container sx={container_sx}>
      <Box>
        <Navbar/>
      </Box>
      <Box>
        <h2>Upcoming Classes</h2>
        <UpcomingClassList/>
      </Box>
      <Box>
        <h2>Discover Classes</h2>
        <ClassList />
      </Box>
    </Container>
  );
}

export default HomePage;
