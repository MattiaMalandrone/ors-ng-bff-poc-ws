import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IsrModel } from '../shared/models/isr.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IsrConsulenzaService {

  readonly baseUrl = `${environment.apiUrl}/governance/sync/`;

  constructor(private readonly http: HttpClient) { }

  initIsrConsulenza() {
    return this.http.post<any>(`${this.baseUrl}/init`, {});
  }
}
