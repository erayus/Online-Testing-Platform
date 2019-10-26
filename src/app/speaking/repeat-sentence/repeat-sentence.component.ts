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
  audioProgress: number;
  constructor() { }
  ngOnInit() {
    const audio = new Audio();
    $(audio).on("loadedmetadata", () => {
      const totalDuration = audio.duration;
      this.preparationInterval = setInterval(() => {
        this.timeLeft -=1;
        if (this.timeLeft === 0){
          clearInterval(this.preparationInterval);
          audio.play()
          this.updateAudioProgressBar(totalDuration);
        }
      }, 1000);
     });
    audio.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/test.mp3';
    this.answerScript = 'This is an audio recording. You are hearing the audio';
  }

  updateAudioProgressBar(initialDuration: number) {
    let currentDuration = initialDuration;
    this.audioProgress = 0;
    const audioDurationInterval = setInterval(() => {
      currentDuration -= 1;
      this.audioProgress = 100 - Math.floor(currentDuration / initialDuration * 100);
      if ( currentDuration === 0 ) {
        clearInterval(audioDurationInterval);
      }
    }, 1000);
  }
}
