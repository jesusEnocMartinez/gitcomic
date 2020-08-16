import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service/storage.service';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
    selector: 'ubicacion-panteon',
    templateUrl: './ubicacion.component.html',
    styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit { 
    mapa: mapboxgl.map;
    currentUser: any;
    isLogin: Boolean;

    constructor(private storageService: StorageService) { }

    ngOnInit() {
        this.currentUser = JSON.parse(this.storageService.getItem('currentUser')) || null;
        console.log(this.currentUser);
        this.isLogin = this.currentUser;
        console.log(this.isLogin)

        mapboxgl.accessToken = environment.mapboxkey
this.mapa = new mapboxgl.Map({
 container: 'mapa-panteon', // container id
 style: 'mapbox://styles/mapbox/streets-v11',
 center: [-97.0840431,18.8529843], // starting position
 zoom: 16 // starting zoom
    });
    this.crearmarcador(-97.0840431,18.8529843);
    this.crearmarcador2(-97.082780,18.854638);
    this.crearmarcador3(-97.080437,18.852569);
    
      }

      crearmarcador2 (log: number,lat:number)
      {
        var marker = new mapboxgl.Marker()
        .setLngLat([log,lat])
        .addTo(this.mapa);

      }
    
      crearmarcador (log: number,lat:number)
      {
        var marker = new mapboxgl.Marker()
        .setLngLat([log,lat])
        .addTo(this.mapa);
    
      }

      crearmarcador3 (log: number,lat:number)
      {
        var marker = new mapboxgl.Marker()
        .setLngLat([log,lat])
        .addTo(this.mapa);
    
      }

}