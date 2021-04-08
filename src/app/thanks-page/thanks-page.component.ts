import { Component, OnInit, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  firstname: string;
  surname: string;
  phone: number;
  email: number;
  country: string;
  city: string;
  username: string;
  password: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
 // qui dovrei inserire il JSON ma non so come generarne uno dinamico
];

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.css']
})


export class ThanksPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['firstname', 'surname', 'phone', 'email', 'country', 'city', 'username', 'password'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

}