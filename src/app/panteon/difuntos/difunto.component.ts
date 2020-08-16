import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DifuntosService } from '../../service/difuntos.service';

@Component({
  selector: 'app-insert',
  templateUrl: './difunto.component.html',
  styleUrls: ['./difunto.component.scss']
})
export class DifuntoComponent implements OnInit {
  
  difuntoForm: FormGroup;
  
  constructor(private router: Router, 
    private difuntosService: DifuntosService,
    private fb: FormBuilder) {
      this.difuntoForm = this.fb.group({
        dniDifunto: ['', Validators.required],
        nombreDifunto: ['', Validators.required],
        fechaDeEnterramiento: ['', Validators.required],
        edadFallecimiento: ['', Validators.required],
        parentescoTitular: ['', Validators.required],
        fechaDifuncion: ['', Validators.required],
        localidad: ['', Validators.required],
        domicilio: ['', Validators.required],
        anotaciones: [''],
        numeroFicha: ['', Validators.required],
        numeroHilera: ['', Validators.required],
        sujetoOrden: ['', Validators.required]
      })
    }
  
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  onGuardarDifunto() {
    console.log(this.difuntoForm.value);

    this.difuntosService.guardarDifunto(this.difuntoForm.value)
      .subscribe(res => {
        console.log('difunto guardado');
        this.router.navigate(['/panteon/difuntos']);
      })
  }
}
