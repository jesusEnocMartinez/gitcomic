import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private BASE_URL = 'http://localhost:3000'

    constructor(private http: HttpClient) { }

    // servicio para simular login modificar
    login(datosLogin) {
        const { correo, contrasena } = datosLogin;
        return this.http.get(`${this.BASE_URL}/usuarios?correo=${correo}&contrasena=${contrasena}`);
    }
}