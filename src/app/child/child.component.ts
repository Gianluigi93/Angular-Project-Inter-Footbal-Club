import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() productCount;

  @Output() riepilogo : EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  // metodo per lanciare un valore fuori dal componente child
  riepilogaOrdine(){
    this.riepilogo.emit('Riepilogo')
}


}
