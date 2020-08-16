import { Component, OnInit } from '@angular/core';
import { Difunto } from '../../modelo/difunto';
import { DifuntosService } from '../../../service/difuntos.service';
import { Router } from '@angular/router';

@Component({
    selector: 'listado-difuntos',
    templateUrl: './listado-difuntos.component.html',
})
export class ListadoDifuntosComponent implements OnInit {

    difuntos: Array<Difunto> = [];

    constructor(private difuntosService: DifuntosService,
        private router: Router) {}
    
    ngOnInit() {
        this.difuntosService.obtenerDifuntos()
            .subscribe((res: Array<Difunto>) => {
                console.log(res)
                this.difuntos = res;
            });
    }

    onGuardarDifunto() {
        this.router.navigate(['/panteon/registrar-difunto']);
    }
}