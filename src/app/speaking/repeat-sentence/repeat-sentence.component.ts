import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeat-sentence',
  templateUrl: './repeat-sentence.component.html',
  styleUrls: ['./repeat-sentence.component.css']
})
export class RepeatSentenceComponent implements OnInit {

  audioSrc: string;
  answerScript: string;
  userAnswer = '';
  constructor() { }

  ngOnInit() {
    this.answerScript = 'This is an audio recording. You are hearing the audio';
  }
  submitAnswer(){
    console.log(this.userAnswer.toLowerCase().replace(/\.|\,|\s/g, ''));
    if (this.userAnswer.toLowerCase().replace(/\.|\,|\s/g, '') == this.answerScript.toLowerCase().replace(/\.|\,|\s/g, '')){
      alert('Correct');
    } else {
      alert('Not correct, please try again');
    }
  }

}
