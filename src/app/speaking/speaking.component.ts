import { Component, OnInit } from '@angular/core';
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.css']
})
export class SpeakingComponent implements OnInit {
  recognition: any;
  $result: any;
  testMode = 'start';
  isRecording = false;
  prepareDuration = 40;
  recordingDuration = 40;
  prepareInterval;
  recordingInterval;
  constructor() {}

  ngOnInit() {
    this.$result = document.getElementById('result');
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
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                  if (event.results[i].isFinal) {
                    finalScripts += event.results[i][0].transcript;
                    // this.$result.innerHTML = finalScripts;
                    // console.log(this.result);
                  } else {
                    console.log('not final');
                  }
                }
              };
      });
    }
    this.recordingDuration = 40;
    this.recordingInterval = setInterval(() => {
      if (this.recordingDuration > 0) {
        this.recordingDuration -= 1;
      } else {
        clearInterval(this.recordingInterval);
        this.recognition.stop();
        this.isRecording = false;
      }
    }, 1000);
  }

}
