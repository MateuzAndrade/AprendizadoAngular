import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { MusicFormComponent } from './music-form/music-form.component';
import { MusicsRoutingModule } from './musics-routing.module';
import { MusicsComponent } from './musics/musics.component';
import { MusicEditComponent } from './music-edit/music-edit.component';


@NgModule({
  declarations: [
    MusicsComponent,
    MusicFormComponent,
    MusicEditComponent
  ],
  imports: [
    CommonModule,
    MusicsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MusicsModule { }
