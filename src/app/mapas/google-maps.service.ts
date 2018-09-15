import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {} from '@types/googlemaps';
import { Point } from '../shared/point';



@Injectable()
export class GoogleMapsService {
  private map: google.maps.Map;
  private loadPromise: Promise<void>;
  //private geocercas: google.maps.
  constructor() { }

//   init(element: HTMLElement): void {
//     this.load().then(() => {
//         this.map = new Microsoft.Maps.Map(element, options);
//         if (!this.searchManager) {
//             Microsoft.Maps.loadModule('Microsoft.Maps.Search', () => {
//                 this.searchManager = new Microsoft.Maps.Search.SearchManager(this.map);
//             });
//         }
//         // this.geofencesLayer = new Microsoft.Maps.Layer('geofencesLayer');
//         // this.assetsLayer = new Microsoft.Maps.Layer('assetsLayer');
//         // this.devicesLayer = new Microsoft.Maps.Layer('devicesLayer');
//         // this.tripsLayer = new Microsoft.Maps.Layer('tripsLayer');
//         // this.locationsLayer = new Microsoft.Maps.Layer('locationsLayer');
//         // this.pointsLayer = new Microsoft.Maps.Layer('pointsLayer');
//         // this.map.layers.insert(this.geofencesLayer);
//         // this.map.layers.insert(this.assetsLayer);
//         // this.map.layers.insert(this.devicesLayer);
//         // this.map.layers.insert(this.tripsLayer);
//         // this.map.layers.insert(this.locationsLayer);
//         // this.map.layers.insert(this.pointsLayer);
//     });
// }
iniciar(element: HTMLElement): void{
  let mapPropi = {
    center: new google.maps.LatLng(-12.095658, -77.023304),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(element, mapPropi);
}

// private load(): Promise<void> {
//   if (this.loadPromise) {
//       return this.loadPromise;
//   }

//   const script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.async = true;
//   script.defer = true;

//   // const mapsCallback = 'bingMapsCallback';
//   // script.src = `https://www.bing.com/api/maps/mapcontrol?branch=release&clientApi=bingmapsfleettracker&callback=${mapsCallback}`;

//   this.loadPromise = new Promise<
//       void
//       >((resolve: Function, reject: Function) => {
//           window[mapsCallback] = () => {
//               resolve();
//           };
//           script.onerror = (error: Event) => {
//               console.error('maps script error' + error);
//               reject(error);
//           };
//       });

//   document.body.appendChild(script);

//   return this.loadPromise;
// }


  mostrarPuntos(puntos: Point[]): void{
   // this.load().then(() => {
    //this.resetMap(puntos);
    this.resetMap();
    for (let p of puntos) {
      const location = new google.maps.LatLng(p.latitud, p.longitud);
      const marker = new google.maps.Marker({
        position: location,
        title: 'punto nuevo',
      });
      marker.setMap(this.map);
    }


//});
  }

  resetMap() {
    //mapa.
    let resultado = this.map.getBounds();
    this.map.setValues(null);
    // for (punto pun of puntoss) {
    //   mapa.getBounds();
    // }
  }


  // resetMap(){
    
  // }

  private mostrarPunto(punto: Point) {
    const location = new google.maps.LatLng(punto.latitude, punto.longitude);
    const marker = new google.maps.Marker({
      position: location,
      title: 'punto nuevo',
    });
    marker.setMap(this.map);
}
}