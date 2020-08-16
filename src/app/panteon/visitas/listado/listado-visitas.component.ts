import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VisitasService } from '../../../service/visitas.service';
import { Persona } from '../../modelo/persona';

@Component({
    selector: 'listado-visitas',
    templateUrl: './listado-visitas.component.html'
})
export class ListadoVisitasComponent implements OnInit {

    visitas: Array<Persona> = [];

    constructor(private visitasService: VisitasService,
        private router: Router) {}

    ngOnInit() {
        this.visitasService.obtenerVisitas()
            .subscribe((res: Array<Persona>) => {
                console.log(res);
                this.visitas = res
            });
    }

    onGuardarVisita() {
        this.router.navigate(['/panteon/registrar-visita']);
    }
}