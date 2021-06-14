import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../usuario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuario = new Usuario('Natasha', 'natasha@avanade.com',100, '1993-09-22');

  constructor() { }

  ngOnInit(): void {
  }

}
