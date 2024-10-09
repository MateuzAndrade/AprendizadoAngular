import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Music } from '../models/music';
import { HttpClient } from '@angular/common/http';
import { delay, first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  private readonly API = '/api/musics'

  constructor( private HttpCliente : HttpClient) { }

  list(){
    return this.HttpCliente.get<Music[]>(this.API)
    .pipe(
      first(),
      //delay(1000)
    )
  }

  save(dados: Music){
    return this.HttpCliente.post<Music>(this.API,dados).pipe(first())
  }

  loadById(id: string): Observable<Music> {
    return this.HttpCliente.get<Music>(`${this.API}/${id}`);
  }

  update(id: string, music: Music): Observable<Music> {
    return this.HttpCliente.put<Music>(`${this.API}/${id}`, music);
  }

  delete(id:string): Observable<void>{
    return this.HttpCliente.delete<void>(`${this.API}/${id}`).pipe(first());;
  }


}
