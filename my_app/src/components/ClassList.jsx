"use client";

import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", width: 0, flex: 0 },
  {
    field: "topic",
    headerName: "Topic",
    sortable: false,
    flex: 2,
  },
  {
    field: "intra",
    headerName: "Teacher",
    sortable: false,
    flex: 1,
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          alignItems: "center",
          boxSizing: "border-box",
          padding: "10px 0px",
        }}
      >
        <img
          src={params.value.imageURL}
          alt="description"
          style={{
            width: "50px",
            height: "50px",
            display: "block",
            borderRadius: "50%",
            overflow: "hidden",
            objectFit: "cover",
          }}
        />
        <Typography variant="h9">{params.value.intra}</Typography>
      </div>
    ),
  },
  {
    field: "dateTime",
    headerName: "Date/Time",
    sortable: false,
    flex: 1,
  },
  {
    field: "venue",
    headerName: "Venue",
    description: "This is demo text",
    sortable: false,
    flex: 1,
  },
  {
    field: "slots",
    headerName: "Slots",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    topic: "Introduction to ft_make_something.c",
    intra: { imageURL: "tempImg.jpeg", intra: "jdoe" },
    dateTime: "15th Oct 10:00 AM ~ 12:00 AM",
    venue: "Discord",
    slots: "4/5",
  },
  {
    id: 2,
    topic: "Continuation of ft_make_something.c",
    intra: { imageURL: "tempImg.jpeg", intra: "jdoe" },
    dateTime: "16th Oct 10:00 AM ~ 2:00 PM",
    venue: "Discord",
    slots: "3/5",
  },
  {
    id: 3,
    topic:
      "Introduction to the continuation to ft_make_something.c: A deep dive",
    intra: { imageURL: "tempImg.jpeg", intra: "jdoe" },
    dateTime: "17th Oct 10:00 AM ~ 4:00 PM",
    venue: "Discord",
    slots: "1/5",
  },
  {
    id: 4,
    topic:
      "Forget all you know about ft_make_something.c, Introduction to obsolescence",
    intra: { imageURL: "tempImg.jpeg", intra: "jdoe" },
    dateTime: "18th Oct 10:00 AM ~ 6:00 PM",
    venue: "Discord",
    slots: "1/5",
  },
];

function ClassList(props) {
  const { search } = props;

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        rowHeight={60}
      />
    </Box>
  );
}

export default ClassList;
