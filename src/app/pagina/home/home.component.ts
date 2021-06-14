import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  title = 'financeiro';
  name = 'Natasha';
  text = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  vetor = ['Hillary L', 'Richard amoy', 'Ana banana']

  add() {
    this.vetor.push(this.name);
    this.name = '';
  }


  remover(x) {
    this.vetor.splice(x, 1);
  }
}
