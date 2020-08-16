import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VisitasService } from '../../service/visitas.service';

@Component({
  selector: 'app-insert',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.scss']
})
export class VisitaComponent implements OnInit {
  visitaForm: FormGroup;
  
  constructor(private router: Router, 
    private visitasService: VisitasService,
    private fb: FormBuilder ) {
      this.visitaForm = this.fb.group({
        nombre: ['', Validators.required],
        domicilio: ['', Validators.required],
        localidad: ['', Validators.required],
        correo: ['']
      })
    }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef

  onGuardarVisita() {
    console.log(this.visitaForm.value);

    this.visitasService.guardarVisita(this.visitaForm.value)
      .subscribe(res => {
        console.log('visita guardada');
        this.router.navigate(['/panteon/visitas']);
      });
  }

}