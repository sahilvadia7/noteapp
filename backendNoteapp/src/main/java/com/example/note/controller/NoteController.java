package com.example.note.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.note.model.Notes;
import com.example.note.service.NoteService;

@RestController
@RequestMapping("/note")
@CrossOrigin(origins = "http://localhost:3000")

public class NoteController {

	@Autowired
	private NoteService noteService;
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PostMapping("/addNote")
	public ResponseEntity<?> addNote(@RequestBody Notes note){
		if(note != null) {
			return new ResponseEntity(noteService.addNote(note),HttpStatus.ACCEPTED);
		}
		return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@GetMapping("/getNotes")
	public ResponseEntity<?> getAllNote(){
		return new ResponseEntity(noteService.getAllNote(),HttpStatus.FOUND);
	}
	
	@DeleteMapping("/deleteNote/{id}")
	public void delNote(@PathVariable Long id){
		 noteService.deleteNote(id);
	}
	
	@GetMapping("/updateNote/{id}")
	public Optional<Notes> noteById(@PathVariable Long id) {
		return noteService.getNoteById(id);
	}
	
	// Update Note
    @PutMapping("/updateNote/{id}")
    public ResponseEntity<Notes> updateNote(@PathVariable Long id, @RequestBody Notes updatedNote) {
        Optional<Notes> existingNote = noteService.getNoteById(id);

        if (existingNote.isPresent()) {
            Notes note = existingNote.get();
//            System.out.println(note);
            note.setTitle(updatedNote.getTitle());
            note.setBody(updatedNote.getBody());
            Notes savedNote = noteService.updateNote(note);
//            System.out.println(savedNote);
            return ResponseEntity.ok(savedNote);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
   
}
