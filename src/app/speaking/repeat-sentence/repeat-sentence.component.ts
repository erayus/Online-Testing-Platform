import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-repeat-sentence',
  templateUrl: './repeat-sentence.component.html',
  styleUrls: ['./repeat-sentence.component.css']
})
export class RepeatSentenceComponent implements OnInit {

  @ViewChild('audioPlayer',{static: true})
  audioPlayerRef: ElementRef;

  audioSrc: string;
  answerScript: string;
  userAnswer = '';
  timeLeft = 3;
  preparationInterval;
  constructor() { }

  ngOnInit() {
    this.preparationInterval = setInterval(() => {
      this.timeLeft -=1;
      if (this.timeLeft == 0){
        clearInterval(this.preparationInterval);
        this.audioPlayerRef.nativeElement.play();
      }
    }, 1000);
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
