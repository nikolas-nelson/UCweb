import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Videos} from '../videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private _url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLiePhqa3Nl2fj6BENXPO-WtYz7FDW-WwN&key=AIzaSyCJULnoBnkfPpFZMsZPiGnIVuF__qhEAAg';
  private videos;
  constructor(private http: HttpClient) {
    this.videos = this.http.get(this._url);
  }

  getVideos(): Observable<Videos[]> {
    return this.http.get<Videos[]>(this._url);
  }
}
