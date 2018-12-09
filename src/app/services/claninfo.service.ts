import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs';
import {Clan} from '../clan';
import {hostViewClassName} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ClaninfoService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  getAllInfo() {
    return this.http.get(`${this.url}`);
  }
}
