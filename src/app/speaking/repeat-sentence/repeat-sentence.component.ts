import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-repeat-sentence',
  templateUrl: './repeat-sentence.component.html',
  styleUrls: ['./repeat-sentence.component.css']
})
export class RepeatSentenceComponent implements OnInit {

  audioSrc: string;
  answerScript: string;
  userAnswer = '';
  timeLeft = 3;
  preparationInterval;
  constructor() { }

  ngOnInit() {
    let audio = new Audio();
    $(audio).on("loadedmetadata", function(){
      var val = audio.duration;

      return val;
     });
    audio.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/test.mp3';
    console.log(audio.duration);
    this.preparationInterval = setInterval(() => {
      this.timeLeft -=1;
      if (this.timeLeft == 0){
        clearInterval(this.preparationInterval);
        audio.play()
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
