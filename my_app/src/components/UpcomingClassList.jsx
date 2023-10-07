// MUI imports
import { Container, Box, Typography } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

let styles = {
  backgroundColor: "#088F8F",
  height: "200px",
  borderRadius: "40px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
};

function UpcomingClassList() {
  return (
    <Container sx={styles}>
      <Box
        width="20%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <img
          src="elon.jpeg"
          style={{
            display: "block",
            borderRadius: "50%",
            height: "120px",
            width: "120px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        width="33%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        color="white"
      >
        <h3>
            Your first Billion
        </h3>
        <h5>
            emusk
        </h5>
      </Box>
      <Box display={"flex"} width={"50%"} justifyContent={"space-evenly"}>
        <Box
          display="flex"
          flexDirection="column"
          flex="1"
          alignItems={"center"}
          color="white"
        >
          <DateRangeIcon />
          <h5>18th Oct</h5>
          <AccessTimeIcon />
          <h5>10:00 AM ~ 6:00 PM</h5>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          flex="1"
          alignItems={"center"}
          color="white"
        >
          <LocationOnIcon />
          <h5>Discord</h5>
          <PeopleAltIcon />
          <h5>3/5</h5>
        </Box>
      </Box>
    </Container>
  );
}

export default UpcomingClassList;
