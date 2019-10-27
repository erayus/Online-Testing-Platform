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
import { SummarizeSpokenTextComponent } from './listening/summarize-spoken-text/summarize-spoken-text.component';
import { RepeatSentenceComponent } from './speaking/repeat-sentence/repeat-sentence.component';
import { WriteFromDictationComponent } from './listening/write-from-dictation/write-from-dictation.component';
import { EssayComponent } from './writing/essay/essay.component';

const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'speaking', component: SpeakingComponent, children: [
    {path: 'read-aloud', component: ReadAloudComponent , pathMatch: 'full'  },
    {path: 'repeat-sentence', component: RepeatSentenceComponent , pathMatch: 'full'},
    {path: '**', component: ComingSoonComponent}
  ]},
  {path: 'writing', component: WritingComponent, children: [
    {path: 'summarize-written-text', component: SummarizeWrittenTextComponent, pathMatch: 'full'},
    {path: 'essay', component: EssayComponent, pathMatch: 'full'},
    {path: '**', component: ComingSoonComponent}
  ]},
  {path: 'reading', component: ReadingComponent, children: [
    {path: 'fill-in-the-blanks', component: FillInTheBlanksComponent, pathMatch: 'full'},
    {path: '**', component: ComingSoonComponent}
  ]},
  {path: 'listening', component: ListeningComponent, children: [
    {path: 'summarize-spoken-text', component: SummarizeSpokenTextComponent, pathMatch: 'full'},
    {path: 'write-from-dictation', component: WriteFromDictationComponent, pathMatch: 'full'},
    {path: '**', component: ComingSoonComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [NeverActivateGuard]
})
export class AppRoutingModule { }
