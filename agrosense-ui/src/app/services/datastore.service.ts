import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  public loggedInUser: any = {
  };

  isUserLoggedIn:boolean = false;
  searchPageIsOpen:boolean = false;
  searchQueryGlobal:string = '';

  constructor() { }
}
