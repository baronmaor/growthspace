import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  backendUrl = 'http://baron-maor.co.il:5555';
  constructor(private httpClient: HttpClient) { }

  public getUser = (userId)=>{
    return this.httpClient.get<any>(`${this.backendUrl}/get-user-form/user/:${userId}`);
  }
}
