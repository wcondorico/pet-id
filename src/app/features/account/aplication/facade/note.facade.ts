import { inject, Injectable } from "@angular/core";
import { Note } from "@features/account/core/interface/note.interface";
import { NoteRepository } from "@features/account/domain/repository/note.repository";

@Injectable()
export class NoteFacade {
  note: NoteRepository = inject(NoteRepository);

  getAllNotes(idPet: number) {
    return this.note.getAllNotes(idPet);
  }

  getNote(idPet: number, idNote: number) {
    return this.note.getNote(idPet, idNote);
  }

  createNote(idPet: number, note: Note) {
    return this.note.createNote(idPet, note);
  }

  updateNote(idPet: number, idNote: number, note: Note) {
    return this.note.updateNote(idPet, idNote, note);
  }

  deleteNote(idPet: number, idNote: number) {
    return this.note.deleteNote(idPet, idNote);
  }
}
