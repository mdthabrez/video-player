import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = [];
  selectedVideo: Video = new Video;
  sv:boolean = false;
  hidden :boolean = true;
  constructor(private _videoService: VideoService) { }


  ngOnInit(){
      this._videoService.getVideos().subscribe(
        (res) => {
          console.log(res);
          this.videos = res as Video[];
        },
        (err) => {
          console.log(err);
        }
      )
    }

  onSelectVideo(video:any){
    this.selectedVideo = video;
    this.sv = true;
    this.hidden = true;
    console.log(this.selectedVideo);
  }


  onSubmitAddVideo(video :Video){
    this._videoService.addVideo(video).subscribe(
      (res) => {
        console.log('Saved successfully');
        this.videos.push(res as Video);
        this.selectedVideo = res as Video;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  onUpdateVideoEvent(video: any){
    this._videoService.updateVideo(video).subscribe(
      (res) => {
        console.log('Updated Sucessfully');
        this.sv = false;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  onDeleteVideoEvent(video: any){
  let videoArray = this.videos;
   console.log(' onDeleteVideoEvent(video: any)');

    this._videoService.deleteVideo(video).subscribe(
      (res) => {
        console.log('Deleted Sucessfully');
        this.sv = false;
        for (let i = 0; i < videoArray.length; i++) {
          if (videoArray[i]._id === video._id) {
              videoArray.splice(i,1);
          }

        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

  onClickNewVideo(){
    this.hidden = false;
  }


}
