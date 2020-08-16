import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VisitasService {
  private BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  guardarVisita(datosVisita) {
    return this.http.post(`${this.BASE_URL}/visitas`, datosVisita);
  }

  obtenerVisitas() {
    return this.http.get(`${this.BASE_URL}/visitas`);
  }
}
