import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
declare var webkitSpeechRecognition: any;


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
  recordingDuration = 40;
  preparationInterval;
  audioProgress: number;

  isRecording = false;
  recognition: any;
  userInput: any;
  testingPassage: any;


  constructor() { }
  ngOnInit() {
    const audio = new Audio();
    $(audio).on("loadedmetadata", () => {
      const totalDuration = audio.duration;
      this.preparationInterval = setInterval(() => {
        this.timeLeft -=1;
        if (this.timeLeft === 0){
          clearInterval(this.preparationInterval);
          audio.play();
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
      if ( currentDuration === 0 ) { // After the audio is finished playing
        clearInterval(audioDurationInterval);
      }
    }, 1000);
  };

  startRecording() {
    if ("webkitSpeechRecognition" in window) {
      navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                this.isRecording = true;
                this.recognition = new webkitSpeechRecognition();
                this.recognition.continuous = true;
                this.recognition.interimResults = true;

                this.recognition.start();
                this.userInput = '';

                this.recognition.onresult = (event) => {
                  for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                      this.userInput += event.results[i][0].transcript;
                      // this.$result.innerHTML = finalScripts;
                      // console.log(this.result);
                    }
                  }
                };
                this.recordingDuration = 40;
                let recordingInterval = setInterval(() => {
                  if (this.recordingDuration > 0) {
                    this.recordingDuration -= 1;
                  } else {
                    clearInterval(recordingInterval);
                    // this.testMode = 'retry';
                    this.isRecording = false;
                    this.recognition.stop();
                    setTimeout(() => {
                      this.compare(this.userInput);
                    }, 2000);

                  }
                }, 1000);
        });

      }
  }
  compare(userInput: string){
    console.log("User Input:", userInput);
    const splitPassage = this.testingPassage.toLowerCase().replace(/\.|\,|"/g, "").split(' ');
    console.log('Split Passage: ', splitPassage);
    const splitUserInput = userInput.split(' ');
    console.log('Split User InputL ', splitUserInput);
    const total = splitPassage.length;
    let score = 0;

    // Loop through each word of the user input
      // Loop through the testing passage from the "Correct Word Index"
      // If not correct, continue
      // If correct:
        // Increase the score
    console.log('Score: ', score);
    // this.result = Math.ceil(score / total * 100 );
    // this.showResult = true;
    // console.log('Result: ', this.result);
  }

}
