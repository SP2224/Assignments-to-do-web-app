import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  log(name: string,action: string){
    console.log(name+' has been '+action);
  }
}
