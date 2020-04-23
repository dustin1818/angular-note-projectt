import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note:Note; 

  constructor(private noteService:NotesService,private router:Router) { }

  ngOnInit() {
    this.note = new Note();
  }

  onSubmit(form:NgForm){
    this.noteService.add(form.value);
    this.router.navigateByUrl('/');
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}
