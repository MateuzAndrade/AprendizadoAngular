import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicsComponent } from './musics/musics.component';
import { MusicFormComponent } from './music-form/music-form.component';
import { MusicEditComponent } from './music-edit/music-edit.component';

const routes: Routes = [{
  path: '',
  component: MusicsComponent
},
{
  path: 'new',
  component: MusicFormComponent
},
{
  path: 'edit/:id',
  component: MusicEditComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicsRoutingModule { }
