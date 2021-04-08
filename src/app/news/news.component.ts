import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cta : string = "Leggi di più";
  
  card = [
    { id:1, "data" : "06/04/2021" },
    { id:2, "titolo" : "Inter-Sassuolo, dove vederla in tv" },
  ];

  card_one = [
    { id:1, "data" : "05/04/2021" },
    { id:2, "titolo" : "Gol, quota 20 e vittoria! Lukaku: 'Trasformiamo la pressione in energia positiva'" },
  ];

}
