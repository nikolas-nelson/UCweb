import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Clan} from '../clan';

@Injectable({
  providedIn: 'root'
})
export class CocapiService {
  apiUrl = 'https://api.clashofclans.com/v1/clans';

  constructor(private http: HttpClient) {
  }

  public getClanInfo(): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: new HttpHeaders().set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijc5MzJmMThhLTAzNTgtNGUxMS1iYWNkLTgyNmM2OTAxOWY4MSIsImlhdCI6MTU0NDA0NzEwOSwic3ViIjoiZGV2ZWxvcGVyL2NhOTgxNjYxLTA5YTYtNzg1Mi0yYzIxLWI0MWE4NWIxM2VmMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjgyLjAuMjAwLjM2Il0sInR5cGUiOiJjbGllbnQifV19.iOh-DWwV7x2Ay9in_1oRUaBMTH8s2u9ZOcJpSG7ovA1IVlyRkO-Hco_n_ZCwCbFMVUhFJCKLbZaX2Mu_CjqqMw')
    });
  }

}
