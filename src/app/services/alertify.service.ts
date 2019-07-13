import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string){
      alert(message);
  }
}
