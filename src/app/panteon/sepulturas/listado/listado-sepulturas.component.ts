import { Component, OnInit } from '@angular/core';
import { SepulturasService } from '../../../service/sepulturas.service';
import { Sepultura } from '../../modelo/sepultura';
import { Router } from '@angular/router';

@Component({
    selector: 'listado-sepulturas',
    templateUrl: 'listado-sepulturas.component.html'
})
export class ListadoSepulturasComponent implements OnInit { 

    sepulturas: Array<Sepultura> = [];

    constructor(private sepulturasService: SepulturasService,
        private router: Router) { }

    ngOnInit() {
        this.sepulturasService.obtenerSepulturas()
            .subscribe((res: Array<Sepultura>) => {
                console.log(res);
                this.sepulturas = res;
            })
    }

    onGuardarSepultura() {
        this.router.navigate(['/panteon/registrar-sepultura']);
    }
}