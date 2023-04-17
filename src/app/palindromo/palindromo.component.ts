import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {

  num: number | null = null;
  result: string | null = null;
  check() {
    if (this.num !== null) {
      const numString = this.num.toString();
      const numReverso = numString.split('').reverse().join('');
      this.result = numString === numReverso ? 'é um palíndromo' : 'não é um palíndromo';
    }
  }
}
