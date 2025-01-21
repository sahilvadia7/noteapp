package com.example.note.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.note.model.Notes;

public interface NoteRepo extends JpaRepository<Notes, Long> {

}
