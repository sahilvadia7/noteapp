import React from "react";
import FloatingActionButtons from "../components/FloatingActionButtons";
import MenuAppBar from "../components/MenuAppBar";
import NoteCard from "../components/NoteCard";

function HomePage() {
  return (
    <>
      <MenuAppBar />
      <NoteCard />
      <FloatingActionButtons />
    </>
  );
}

export default HomePage;
