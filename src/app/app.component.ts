import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { AmazonService } from './amazon-service.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    pathList = [];
    constructor(private route: ActivatedRoute,
                private _location: Location,
                ) {
    }
    ngOnInit(): void {
      // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      // Add 'implements OnInit' to the class.
      this._location.onUrlChange((url) => {
        this.pathList = url.split('/');
      })
    }

}
