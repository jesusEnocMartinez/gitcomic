import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SepulturasService {
  
  private BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  guardarSepultura(datosSepultura) {
    return this.http.post(`${this.BASE_URL}/sepulturas`, datosSepultura);
  }

  obtenerSepulturas() {
    return this.http.get(`${this.BASE_URL}/sepulturas`);
  }
}
