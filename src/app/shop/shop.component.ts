import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  // definisco una variabile pari a 0 
  product = 0;

  // definisco una seconda variabile per agire sul bottone riepilogo ordine
  testoReipilogo = '';

  constructor() { }

  ngOnInit(): void {
  }

  // metodo che ho assegnato al bottone whish list
  inviaAlClick(){
    // incremento la mia variabile euro
    this.product++
  }

  // metodo da invocare al click su riepilogo ordine
  riepilogaOrdine(event){
    console.log(event);
    this.testoReipilogo = event;
  }

  card1 = [
    { id:1, "prodotto" : "ticket: Inter vs Sassuolo" },
    { id:2, "tipo" : "Serie A" },
    { id:3, "prezzo" : "65€"
  }
  ]
  card2 = [
    { id:1, "prodotto" : "ticket: Inter vs Juventus"},
    { id:2, "tipo" : "Serie A" },
    { id:3, "prezzo" : "65€" }
  ]
  card3 = [
    { id:1, "prodotto" : "ticket: Inter vs Milan" },
    { id:2, "tipo" : "UFC Champions League" },
    { id:3, "prezzo" : "120€" }
  ]
  card4 = [
    { id:1, "prodotto" : "ticket: Inter vs Bologna" },
    { id:2, "tipo" : "Coppa Italia" },
    { id:3, "prezzo" : "15€" }
  ]
  card5 = [
    { id:1, "prodotto" : "ticket: Inter vs Verona" },
    { id:2, "tipo" : "Serie A" },
    { id:3, "prezzo" : "65€" }
  ]

}

