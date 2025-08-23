import { Component, EventEmitter, Input } from '@angular/core';
import { DatastoreService } from '../../services/datastore.service';
import { LoaderService } from '../../services/loader-service/loader.service';

@Component({
  selector: 'app-searchpage',
  imports: [],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.css'
})
export class SearchpageComponent {
  @Input() homeSearchTransaction:any;

  constructor(public datastoreService: DatastoreService, private loaderService: LoaderService) { 
  }

  searchResults: any[] = [];
  filteredSearchResults: any[] = [];

  // ngOnInit(): void {
  // }

  ngOnChanges(){
    this.loaderService.show();
    this.searchResults = [
      { title: 'Farmer 1', value: 1245 },
      { title: 'Farmer 2', value: 980 },
      { title: 'Farmer 3', value: 1500 } 
    ];

    this.filteredSearchResults = 
    this.searchResults.filter((item) => {

      if(item.title.toLowerCase().indexOf(this.homeSearchTransaction.toLowerCase()) !== -1){
        return item;
      };
    });
    this.loaderService.hide();
  }

}
