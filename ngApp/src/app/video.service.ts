import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase ,HttpHeaders, HttpRequest} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video } from './video';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class VideoService {

  private getUrl  = 'http://localhost:3000/api/videos';
  private baseUrl  = 'http://localhost:3000/api/video';

  constructor(private http:HttpClient) { }

  getVideos(){
    return this.http.get(this.getUrl);
  }

   addVideo(video :Video){
     return this.http.post(this.baseUrl,video);
   }

   updateVideo(video: Video){
     return this.http.put(this.baseUrl + `/${video._id}`,video);
   }

   deleteVideo(video: Video){
     console.log(this.baseUrl + `/${video._id}`);

    return this.http.delete(this.baseUrl + `/${video._id}`);
  }

}

