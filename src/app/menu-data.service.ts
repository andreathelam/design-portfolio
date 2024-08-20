import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  private n1 = new BehaviorSubject(['','','']); //title, color, link
  private n2 = new BehaviorSubject(['','','']);
  private n3 = new BehaviorSubject(['','','']);
  private n4 = new BehaviorSubject(['','','']);
  currentN1 = this.n1.asObservable();
  currentN2 = this.n2.asObservable();
  currentN3 = this.n3.asObservable();
  currentN4 = this.n4.asObservable();



  constructor() { }

  changeName(n1:Array<string>, n2:Array<string>, n3:Array<string>, n4:Array<string>) {
    this.n1.next(n1);
    this.n2.next(n2);
    this.n3.next(n3);
    this.n4.next(n4);
  }
}
