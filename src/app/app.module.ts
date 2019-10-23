import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { WritingComponent } from './writing/writing.component';
import { ReadingComponent } from './reading/reading.component';
import { ListeningComponent } from './listening/listening.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './profile/line-chart/line-chart.component';
import { RadarChartComponent } from './profile/radar-chart/radar-chart.component';
import { PieChartComponent } from './profile/pie-chart/pie-chart.component';
import { BarChartComponent } from './profile/bar-chart/bar-chart.component';
import { ReadAloudComponent } from './speaking/read-aloud/read-aloud.component';
import { RepeatSentenceComponent } from './speaking/repeat-sentence/repeat-sentence.component';
import { DescribeImageComponent } from './speaking/describe-image/describe-image.component';
import { SummarizeWrittenTextComponent } from './writing/summarize-written-text/summarize-written-text.component';
import { ComingSoonComponent } from './share/coming-soon/coming-soon.component';
import { FillInTheBlanksComponent } from './reading/fill-in-the-blanks/fill-in-the-blanks.component';
import { SummarizeSpokenTextComponent } from './listening/summarize-spoken-text/summarize-spoken-text.component';
import { TestExplanationComponent } from './share/test-explanation/test-explanation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SpeakingComponent,
    WritingComponent,
    ReadingComponent,
    ListeningComponent,
    LineChartComponent,
    RadarChartComponent,
    PieChartComponent,
    BarChartComponent,
    ReadAloudComponent,
    RepeatSentenceComponent,
    DescribeImageComponent,
    SummarizeWrittenTextComponent,
    ComingSoonComponent,
    FillInTheBlanksComponent,
    SummarizeSpokenTextComponent,
    TestExplanationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
