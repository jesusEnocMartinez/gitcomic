import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SepulturasService } from '../../service/sepulturas.service';

@Component({
  selector: 'app-insert',
  templateUrl: './sepultura.component.html',
  styleUrls: ['./sepultura.component.scss']
})
export class SepulturaComponent implements OnInit {
  
  sepulturaForm: FormGroup;

  constructor(private router: Router,
    private sepulturasService: SepulturasService,
    private fb: FormBuilder) {
      this.sepulturaForm = this.fb.group({
        numeroSepultura: ['', Validators.required],
        numeroAntiguo: [''],
        campoSanto: ['', Validators.required],
        ultimoDifunto: [''],
        fechaDifuncion: ['', Validators.required],
        dni: ['', Validators.required],
        estado: [''],
        parentescoTitular: ['', Validators.required],
        capacidad: ['']
      });
    }
  
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef

  onGuardarSepultura() {
    console.log(this.sepulturaForm.value);
    this.sepulturasService.guardarSepultura(this.sepulturaForm.value)
      .subscribe(res => {
        console.log('sepultura guardada');
        console.log(res)
        this.router.navigate(['/panteon/sepulturas']);
      })
  }
}
