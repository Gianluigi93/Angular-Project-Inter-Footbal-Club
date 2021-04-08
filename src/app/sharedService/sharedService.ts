import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// definisco una costante
const MockUrl ='https://run.mocky.io/v3/500a4db9-c49e-47fa-befc-cb8ff938acb9';

@Injectable({ 
    providedIn: 'root'
})


export class SharedService{

    constructor( private http:HttpClient){}

    TeamInter():Observable<any>{
        return this.http.get(MockUrl);
    }

}