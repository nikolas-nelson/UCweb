import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClaninfoService {
  url = 'https://united-clan.cz:4000';

  constructor(private http: HttpClient) {
  }
  getAllInfo() {
    return this.http.get(`${this.url}/clan`);
  }
}
