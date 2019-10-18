import { Component, OnInit } from '@angular/core';
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-read-aloud',
  templateUrl: './read-aloud.component.html',
  styleUrls: ['./read-aloud.component.css']
})
export class ReadAloudComponent implements OnInit {

  recognition: any;
  testMode = 'start';
  isRecording = false;
  prepareDuration = 40;
  recordingDuration = 40;
  prepareInterval;
  recordingInterval;
  showResult = false;
  result: number;
  testingPassage = `Charles Darwin published his paper “On the Origin of Species” in 1859.
   It is one of the most well-known pieces of scientific literature in human history.
   In the paper, Darwin proposes the theory of natural selection.
   He states that for any generation of any species, there will always be a struggle for survival.
   Individuals who are better suited to the environment are “fitter”, and therefore have a much higher chance of surviving and reproducing.
   This means that later generations are likely to inherit these stronger genetic traits.`;
  constructor() {}

  ngOnInit() {

  }
  triggerTest(){
    switch (this.testMode) {
      case 'start':
        this.testMode = 'stop';
        this.startTimer();
        break;
      case 'stop':
        this.testMode = 'retry';
        if (this.recognition) {
          this.isRecording = false;
          this.recognition.stop();
          clearInterval(this.recordingInterval);
        }
        clearInterval(this.prepareInterval);
        break;
      case 'retry':
        this.testMode = 'stop';
        this.prepareDuration = 3;
        this.startTimer();
        break;
    }

  }
  startTimer(){
    this.prepareInterval = setInterval(() => {
      if (this.prepareDuration > 0) {
        this.prepareDuration -= 1;
      } else {
        clearInterval(this.prepareInterval);
        this.startRecording();
      }
    }, 1000);
  }
  startRecording(){
    if ("webkitSpeechRecognition" in window) {
    navigator.mediaDevices.getUserMedia({ audio: true })
          .then((stream) => {
              this.isRecording = true;
              this.recognition = new webkitSpeechRecognition();
              this.recognition.continuous = true;
              this.recognition.interimResults = true;

              this.recognition.start();
              let finalScripts = '';

              this.recognition.onresult = (event) => {
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                  if (event.results[i].isFinal) {
                    finalScripts += event.results[i][0].transcript;
                    console.log(finalScripts);
                    // this.$result.innerHTML = finalScripts;
                    // console.log(this.result);
                  }
                }
              };
              this.recordingDuration = 40;
              this.recordingInterval = setInterval(() => {
                if (this.recordingDuration > 0) {
                  this.recordingDuration -= 1;
                } else {
                  clearInterval(this.recordingInterval);
                  this.testMode = 'retry';
                  this.isRecording = false;

                  this.recognition.stop();

                  setTimeout(()=>{
                    this.compare(finalScripts);
                  }, 3000)

                }
              }, 1000);
      });

    }
  }

  compare(userInput: string){
    const splitPassage = this.testingPassage.toLowerCase().replace(/\.|\,/g, "").replace("'s", 'is').split(' ');
    const splitUser = userInput.split(' ');
    const total = splitPassage.length;
    let score = 0;

    for ( let i = 0; i < splitPassage.length; i++ ) {
      score = splitUser[i] == splitPassage[i] ? score + 1  : score;
    }
    this.result = Math.ceil(score / total * 100 );
    this.showResult = true;
    console.log('User Input: ', this.result);
  }

  toggleResultDisplay(){
    this.showResult = this.showResult ? !this.showResult : this.showResult;
  }
}
