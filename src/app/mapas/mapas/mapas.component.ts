import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from '@types/googlemaps';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { MapasService } from '../mapas.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
	map: google.maps.Map;
	public puntos2 = [];
	constructor(private httpService: HttpClient, private _puntosService: MapasService){ }
	lista_puntos: string [];
/* 	ngOnInit(){
		let mapProp = {
			center: new google.maps.LatLng(18.5793, 73.8143),
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
	} */
	ngOnInit(){
 		//let map;
		const locations;
		const myLatlng = new google.maps.LatLng(40.7488, -73.985);
		const mapOptions = {
			zoom: 13,
			center: myLatlng,
			scrollwheel: false
		};
		this._puntosService.getPuntos()
		.subscribe(data => this.puntos2 = data);
		//map = new google.maps.Map(document.getElementById('map'), mapOptions);
		this.map = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
		this.httpService.get('./lugares.json').subscribe(
			data => {
				this.lista_puntos = data as string [];
				for(let location in this.lista_puntos){
					let latLng = {lat: Number(location.longitude), lng: Number(location.longitude)};
					let marker = new google.maps.Marker({
						position: latLng,
						title: location.locationName
					});
					marker.setMap(this.map);
				} 
			},
			(err: HttpErrorResponse) => {
				console.log(err.message);
			},
			
		);
		for(let location in this.lista_puntos){
			let latLng = {lat: Number(location.longitude), lng: Number(location.longitude)};
			let marker = new google.maps.Marker({
				position: latLng,
				title: location.locationName
			});
			marker.setMap(this.map);
		} 
	}
}
//   constructor() { }

//   ngOnInit() {
//   }

// }
