import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../interfaces/cats';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private apiEndpoint = 'https://api.thecatapi.com/v1/breeds';
  private apiKey = 'bda53789-d59e-46cd-9bc4-2936630fde39';

  constructor(private http: HttpClient) {}

  getCats(page: number, pageSize: number): Observable<Cat[]> {
    const url = `${this.apiEndpoint}?limit=${pageSize}&page=${page}`;
    return this.http.get<Cat[]>(url, {
      headers: {
        'x-api-key': this.apiKey,
      },
    });
  }
}
