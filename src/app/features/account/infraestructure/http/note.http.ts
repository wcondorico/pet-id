import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Note } from "@features/account/core/interface/note.interface";
import { NoteRepository } from "@features/account/domain/repository/note.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";
import { TokensService } from "@features/auth/core/stores/tokens.service";

@Injectable()
export class NoteHttp extends NoteRepository {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly tokensService: TokensService = inject(TokensService);
  url = `${environment.api}/pet`
  private token = {
    headers: {
      'Authorization': `Bearer ${this.tokensService.accessToken}`
    }
  }

  getAllNotes(idPet: number): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.url}/${idPet}/note`, this.token)
  }
  getNote(idPet: number, idNote: number): Observable<Note> {
    return this.http.get<Note>(`${this.url}/${idPet}/note/${idNote}`, this.token)
  }
  createNote(idPet: number, note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.url}/${idPet}/note`, note, this.token)
  }
  updateNote(idPet: number, idNote: number, note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.url}/${idPet}/note/${idNote}`, note, this.token)
  }
  deleteNote(idPet: number, idNote: number): Observable<Note> {
    return this.http.delete<Note>(`${this.url}/${idPet}/note/${idNote}`, this.token)
  }
}
