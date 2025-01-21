package com.example.note.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.note.model.Notes;
import com.example.note.repository.NoteRepo;

@Service
public class NoteService {

	@Autowired
	private NoteRepo noteRepo;
	
	public Notes addNote(Notes note) {
		return noteRepo.save(note);
	}
	
	public List<Notes> getAllNote(){
		return noteRepo.findAll();
	}
	
	public void deleteNote(Long id) {
		 noteRepo.deleteById(id);
	}
	
	 public Notes updateNote(Notes note) {
	        return noteRepo.save(note);
	    }

	    public Optional<Notes> getNoteById(Long id) {
	        return noteRepo.findById(id);
	    }
	
}
