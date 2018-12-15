import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Videos} from '../videos';


@Injectable({
  providedIn: 'root'
})

export class VideosService {


  constructor(private http: HttpClient) {

  }

  getVideos() {
   return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLiePhqa3Nl2fj6BENXPO-WtYz7FDW-WwN&key=AIzaSyCJULnoBnkfPpFZMsZPiGnIVuF__qhEAAg');
  }
}
