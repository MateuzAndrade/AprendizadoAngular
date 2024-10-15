import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MusicsService } from '../services/musics.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrl: './music-form.component.scss'
})
export class MusicFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: MusicsService,
    private snackBar : MatSnackBar,
    private location : Location
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      autor: [null],
      link: [null]
    })

  }
  onSubmit() {
    this.service.save(this.form.value).subscribe(()=>this.oSuccess())
  }

  onCancel() {

    this.location.back();

  }

  oSuccess(){
    this.snackBar.open('Música Inserida com Sucesso','',{duration: 5000});
    this.onBack();
  }

  onBack(){
    this.location.back()
  }

}
