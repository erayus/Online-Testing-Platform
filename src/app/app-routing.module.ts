import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { WritingComponent } from './writing/writing.component';
import { ReadingComponent } from './reading/reading.component';
import { ListeningComponent } from './listening/listening.component';
import { ReadAloudComponent } from './speaking/read-aloud/read-aloud.component';


const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'speaking', component: SpeakingComponent, children:[
    {path: 'read-aloud', component: ReadAloudComponent }
  ]},
  {path: 'writing', component: WritingComponent},
  {path: 'reading', component: ReadingComponent},
  {path: 'listening', component: ListeningComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
