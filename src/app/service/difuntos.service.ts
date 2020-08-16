import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DifuntosService {
  private BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  guardarDifunto(datosDifunto) {
    return this.http.post(`${this.BASE_URL}/difuntos`, datosDifunto);
  }

  obtenerDifuntos() {
    return this.http.get(`${this.BASE_URL}/difuntos`);
  }
}
