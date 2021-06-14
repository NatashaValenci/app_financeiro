import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
