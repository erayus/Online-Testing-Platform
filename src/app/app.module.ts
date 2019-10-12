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
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
