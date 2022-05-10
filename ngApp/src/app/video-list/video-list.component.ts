import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from './../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {

  public SelectVideo = new EventEmitter();
  videos: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vid: Video){
    this.SelectVideo.emit(vid);
  }
}
