import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-insert',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;

  constructor(private router: Router, 
    private usuarioService: UsuarioService,
    private fb: FormBuilder ) {
      this.registroForm = this.fb.group({
        /* clave: ['', Validators.required], */
        nombre: ['', Validators.required],
        telefono: [''],
        correo: ['', Validators.required],
        contrasena: ['', Validators.required]
      });
    }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef

  onGuardarUsuario() {
    console.log(this.registroForm.value);

    this.usuarioService.guardarUsuario(this.registroForm.value)
      .subscribe(res => {
        console.log('usuario registrado');
        this.router.navigate(['/panteon/inicio']);
      });
  }

}
