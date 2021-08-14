import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //El ! me permite indicarle a typescript que el objeto nunca va a ser nulo

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
