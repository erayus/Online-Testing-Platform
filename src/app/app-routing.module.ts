import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { WritingComponent } from './writing/writing.component';
import { ReadingComponent } from './reading/reading.component';
import { ListeningComponent } from './listening/listening.component';
import { ReadAloudComponent } from './speaking/read-aloud/read-aloud.component';
import { NeverActivateGuard } from './share/never-activate.guard';
import { SummarizeWrittenTextComponent } from './writing/summarize-written-text/summarize-written-text.component';
import { ComingSoonComponent } from './share/coming-soon/coming-soon.component';
import { FillInTheBlanksComponent } from "./reading/fill-in-the-blanks/fill-in-the-blanks.component";

const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'speaking', component: SpeakingComponent, children: [
    {path: 'read-aloud', component: ReadAloudComponent , pathMatch: 'full'  },
    {path: '**', component: ComingSoonComponent}
  ]},
  {path: 'writing', component: WritingComponent, children: [
    {path: 'summarize-written-text', component: SummarizeWrittenTextComponent, pathMatch: 'full'  },
    {path: '**', component: ComingSoonComponent}
  ]},
  {path: 'reading', component: ReadingComponent, children: [
    {path: 'fill-in-the-blanks', component: FillInTheBlanksComponent, pathMatch: 'full'  },
    {path: '**', component: ComingSoonComponent}
  ]},
  {path: 'listening', component: ListeningComponent, children: [
    {path: '**', component: ComingSoonComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [NeverActivateGuard]
})
export class AppRoutingModule { }
