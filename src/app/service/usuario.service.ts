import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private BASE_URL = 'http://localhost:3000'

  guardarUsuario(datosUsuario) {
    return this.http.post(`${this.BASE_URL}/usuarios`, datosUsuario);
  }
  
}
