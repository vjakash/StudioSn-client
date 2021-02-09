import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MainservService {

  constructor(private http:HttpClient) { }
  getQuote(details):Observable<any>{
    return this.http.post(`${environment.serverURL}/getQuote`,details);
  }
}
