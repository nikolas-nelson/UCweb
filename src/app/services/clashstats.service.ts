import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClashstatsService {

  url = 'https://united-clan.cz:8443';

  constructor(private http: HttpClient) { }

  getStats() {
    return this.http.get(`${this.url}/clan`);
  }
}
