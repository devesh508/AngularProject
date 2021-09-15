import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employ } from 'src/app/employ';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployService {
  private corsHeaders: HttpHeaders = new HttpHeaders();
  private baseURL = 'http://localhost:9093/api/v1/employs';
  constructor(private httpClient: HttpClient) {
    this.corsHeaders= new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    });  }
  getEmploysList(): Observable<Employ[]> {
  return this.httpClient.get<Employ[]>(`${this.baseURL}`);
  }
  createEmploy(employ: Employ): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employ);
  }
  getEmployById(id: number): Observable<Employ>{
    return this.httpClient.get<Employ>(`${this.baseURL}/${id}`);
  }
  updateEmploy(id: number, employ: Employ): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employ);
  }
  deleteEmploy(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  loginEmploy(username: string):Observable<object>{
    return this.httpClient.get<Employ>(`${this.baseURL}`);
  }
}
