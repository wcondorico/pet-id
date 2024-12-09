import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Note } from "@features/account/core/interface/note.interface";
import { NoteRepository } from "@features/account/domain/repository/note.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";

@Injectable()
export class NoteHttp extends NoteRepository {
  private readonly http: HttpClient = inject(HttpClient);
  url = `${environment.api}/pet`

  getAllNotes(idPet: number): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.url}/${idPet}/note`)
  }
  getNote(idPet: number, idNote: number): Observable<Note> {
    return this.http.get<Note>(`${this.url}/${idPet}/note/${idNote}`)
  }
  createNote(idPet: number, note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.url}/${idPet}/note`, note)
  }
  updateNote(idPet: number, idNote: number, note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.url}/${idPet}/note/${idNote}`, note)
  }
  deleteNote(idPet: number, idNote: number): Observable<Note> {
    return this.http.delete<Note>(`${this.url}/${idPet}/note/${idNote}`)
  }
}
