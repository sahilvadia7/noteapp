import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, TextField, Button, Box } from "@mui/material";
import axios from "axios";
import MenuAppBar from "./MenuAppBar";

export default function AddNotePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const location = useLocation(); // Access state passed from navigation
  const navigate = useNavigate();

  // Load existing note data if in edit mode
  useEffect(() => {
    if (location.state?.note) {
      const { title, body } = location.state.note;
      setTitle(title);
      setBody(body);
    }
  }, [location.state]);

  const handleSaveNote = async () => {
    if (title.trim() && body.trim()) {
      try {
        const apiUrl = location.state?.note
          ? `http://localhost:8080/note/updateNote/${location.state.note.id}` // Edit mode
          : "http://localhost:8080/note/addNote"; // Add mode

        const method = location.state?.note ? "put" : "post";

        await axios[method](apiUrl, { title, body });

        // Clear input fields
        setTitle("");
        setBody("");

        // Redirect to home page
        navigate("/");
      } catch (error) {
        console.error("Error saving the note:", error);
        alert("Failed to save the note. Please try again later.");
      }
    } else {
      alert("Please fill out both the title and body.");
    }
  };

  return (
    <>
      <MenuAppBar />
      <Box sx={{ p: 3, maxWidth: 600, margin: "0 auto" }}>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 35 }}>
          {location.state?.note ? "Edit Note" : "Add Note"}
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Body"
          variant="outlined"
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSaveNote}>
          {location.state?.note ? "Update Note" : "Add Note"}
        </Button>
      </Box>
    </>
  );
}
