import { Component, Output } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Music } from '../models/music';
import { MusicsService } from '../services/musics.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrl: './musics.component.scss'
})
export class MusicsComponent {

  musics$: Observable<Music[]>;

  displayedColumns = ['nome', 'autor', 'link', 'action']
  @Output() edit = new EventEmitter(false);


  constructor(private musicService: MusicsService,
    public dialog: MatDialog,
    private router: Router) {

    this.musics$ = this.musicService.list()
      .pipe(
        catchError(error => {
          this.openError('Erro ao Carregar Lista de Músicas')
          return of([])
        })
      );
  }

  openError(errorMsg: String) {

    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }

  onAdd() {
    this.router.navigate(['musics/new']);
  }

  onEdit(music: Music){
    this.router.navigate(['musics/edit/', music._id])
  }

  onDelete(music: Music) {
    if (confirm(`Você tem certeza que deseja deletar "${music.nome}"?`)) {
      this.musicService.delete(music._id).subscribe({
        next: () => {
          // Atualiza a lista após a exclusão
          this.musics$ = this.musicService.list().pipe(
            catchError(error => {
              this.openError('Erro ao Atualizar Lista de Músicas');
              return of([]);
            })
          );
        },
        error: () => this.openError('Erro ao Deletar Música')
      });
    }
  }

}
