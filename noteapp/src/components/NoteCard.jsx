import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardActionArea,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditNote, RemoveRedEye, ViewDay, ViewList } from "@mui/icons-material";

export default function NoteCard() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  // Fetch notes from the API
  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await fetch("http://localhost:8080/note/getNotes");
        const data = await response.json();
        setNotes(data.slice(0, 20)); // Limit to 12 notes
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }
    fetchNotes();
  }, []);

  // Delete note by ID
  const deleteNote = async (noteId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/note/deleteNote/${noteId}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        // Remove the deleted note from the state
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
        alert(`Note #${noteId} deleted successfully!`);
      } else {
        alert(`Failed to delete Note #${noteId}`);
      }
    } catch (error) {
      console.error("Error deleting note:", error);
      alert("An error occurred while deleting the note.");
    }
  };

  const handleCardClick = async (noteId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/note/updateNote/${noteId}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch note data");
      }
      const noteData = await response.json();

      // Navigate to the Add Note page with the fetched data
      navigate("/addNote", { state: { note: noteData } });
    } catch (error) {
      alert(`Error fetching note: ${error.message}`);
    }
  };

  const handleDetailView = async (noteId) => {
    // alert(noteId);

    try {
      const response = await fetch(
        `http://localhost:8080/note/updateNote/${noteId}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch note data");
      }
      const noteData = await response.json();

      // Navigate to the Add Note page with the fetched data
      navigate("/detail-view", { state: { note: noteData } });
    } catch (error) {
      alert(`Error fetching note: ${error.message}`);
    }
  };

  return (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={3}
      sx={{ p: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {notes.map((note) => (
        <Grid xs={4} sm={4} md={3} key={note.id}>
          <Card
            variant="outlined"
            sx={{
              minHeight: 120,
              m: 1,
              boxShadow: 4,
              borderRadius: 2,
              "&:hover": {
                boxShadow: 6, // Adds shadow on hover
                transform: "scale(1.02)", // Slightly enlarges the card
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out", // Smooth transition
              },
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Note #{note.id}
              </Typography>
              <Typography variant="h5" component="div" noWrap>
                {note.title}
              </Typography>
              <Typography variant="body2" noWrap>
                {note.body}
              </Typography>
            </CardContent>
            <CardActions sx={{}}>
              <IconButton aria-label="view">
                <RemoveRedEye
                  color="primary"
                  onClick={() => handleDetailView(note.id)}
                />
              </IconButton>

              <IconButton aria-label="delete">
                <DeleteIcon color="error" onClick={() => deleteNote(note.id)} />
              </IconButton>

              <IconButton aria-label="edit">
                <EditNote
                  color="success"
                  onClick={() => handleCardClick(note.id)}
                />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
