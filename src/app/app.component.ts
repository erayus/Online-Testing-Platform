import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { AmazonService } from './amazon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor() {
    }
    ngOnInit(): void {
      // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      // Add 'implements OnInit' to the class.
    }

}
