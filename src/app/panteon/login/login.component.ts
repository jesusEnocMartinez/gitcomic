import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Usuario } from '../modelo/usuario';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-insert',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, 
    private authService: AuthService,
    private fb: FormBuilder,
    private storageService: StorageService) {
      this.loginForm = this.fb.group({
        correo: ['jesus.enri1@yopmail.com', Validators.required],
        contrasena: ['qwerty123', Validators.required]
      });
    }

  ngOnInit() { }

  onLogin() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe((res: Array<Usuario>) => {
        console.log('login success');
        console.log(res);
        if(res.length === 1) {
          const currentUser = JSON.stringify(res[0]);
          this.storageService.setItem('currentUser', currentUser);
          this.router.navigate(['/panteon/inicio']);
        }
      });
  }
}
