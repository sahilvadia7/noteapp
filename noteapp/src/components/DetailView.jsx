import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Typography, Box, Container } from "@mui/material";
import MenuAppBar from "./MenuAppBar";

export default function DetailView() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const location = useLocation(); // Access state passed from navigation

  useEffect(() => {
    if (location.state?.note) {
      const { id, title, body } = location.state.note;
      setId(id);
      setTitle(title);
      setBody(body);
    }
  }, [location.state]);

  return (
    <>
      <MenuAppBar />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          padding: 2,
        }}
      >
        <Card
          sx={{
            width: "100%",
            minHeight: "20vh",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "#fff",
            "&:hover": {
              boxShadow: 6, // Adds shadow on hover
              transform: "scale(1.02)", // Slightly enlarges the card
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out", // Smooth transition
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "blue",
              marginBottom: 1,
              fontWeight: 600,
            }}
          >
            Note ID: {id}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginBottom: 2,
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.6,
              whiteSpace: "pre-wrap", // Keeps line breaks in the body
            }}
          >
            {body}
          </Typography>
        </Card>
      </Container>
    </>
  );
}
