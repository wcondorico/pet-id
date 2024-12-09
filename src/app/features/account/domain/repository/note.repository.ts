import { Note } from "@features/account/core/interface/note.interface";
import { Observable } from "rxjs";

export abstract class NoteRepository {
  abstract getAllNotes(idPet: number): Observable<Note[]>;
  abstract getNote(idPet: number, idNote: number): Observable<Note>;
  abstract createNote(idPet: number, note: Note): Observable<Note>;
  abstract updateNote(idPet: number, idNote: number, note: Note): Observable<Note>;
  abstract deleteNote(idPet: number, idNote: number): Observable<Note>;
}
