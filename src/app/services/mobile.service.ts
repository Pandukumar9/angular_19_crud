import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  private apiUrl = 'http://localhost:3000/mobiles';

  constructor(private http: HttpClient) {}

  getMobiles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMobile(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addMobile(mobile: { name: string; brand: string; price: number }): Observable<any> {
    return this.http.post(this.apiUrl, mobile);
  }

  updateMobile(id: string, mobile: { name: string; brand: string; price: number }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, mobile);
  }

  deleteMobile(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  deleteAllMobiles(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

}
