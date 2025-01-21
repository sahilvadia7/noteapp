import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingActionButtonsx() {
  const navigate = useNavigate();

  const handleAddNoteRedirect = () => {
    navigate("/addNote"); // Redirect to the Add Note Page
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
      }}
    >
      <Fab
        sx={{ p: 5 }}
        color="primary"
        aria-label="add"
        onClick={handleAddNoteRedirect}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
