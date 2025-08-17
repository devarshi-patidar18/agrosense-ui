import { Component } from '@angular/core';
import { DatastoreService } from '../../services/datastore.service';

@Component({
  selector: 'app-searchpage',
  imports: [],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.css'
})
export class SearchpageComponent {

  constructor(public datastoreService: DatastoreService) { }

  searchResults: any[] = [];

  ngOnInit(): void {
    this.searchResults = [
      { title: 'Farmer 1', value: 1245 },
      { title: 'Farmer 2', value: 980 },
      { title: 'Farmer 3', value: 1500 }
    ];
  }

}
