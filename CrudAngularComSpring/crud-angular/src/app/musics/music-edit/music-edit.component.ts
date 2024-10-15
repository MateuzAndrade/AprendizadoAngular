import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MusicsService } from '../services/musics.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-music-edit',
  templateUrl: './music-edit.component.html',
  styleUrl: './music-edit.component.scss'
})
export class MusicEditComponent implements OnInit {

  form: FormGroup;
  musicId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private service: MusicsService,
    private route: ActivatedRoute,  // Injeção para acessar a rota
    private location: Location,
    private snackBar: MatSnackBar
  ){
    this.form = this.formBuilder.group({
      nome: [null],
      autor: [null],
      link: [null]
    });
  }

  ngOnInit(): void {
    // Obtenha o ID da música da URL
    this.musicId = this.route.snapshot.paramMap.get('id');
    if (this.musicId) {
      // Carregue os dados da música
      this.service.loadById(this.musicId).subscribe(music => {
        // Atualize o formulário com os dados da música
        this.form.patchValue({
          nome: music.nome,
          autor: music.autor,
          link: music.link
        });
      });
    }
  }

  onSubmit(): void {
    if (this.musicId) {
      this.service.update(this.musicId, this.form.value).subscribe(() => this.onSuccess());
    }
  }

  onCancel(): void {
    this.location.back();
  }

  onSuccess(): void {
    this.snackBar.open('Música atualizada com sucesso', '', { duration: 5000 });
    this.location.back();
  }


}
