import { Component, EventEmitter, OnInit } from '@angular/core';

import { Video } from '../video';
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs:['updateVideoEvent','deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {

  video: any;
  editTitle: boolean=false;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.editTitle=false;
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo(){
    this.deleteVideoEvent.emit(this.video);

  }

  onTitleClick(){
    this.editTitle=true;
  }
}
