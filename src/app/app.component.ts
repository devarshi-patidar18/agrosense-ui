import { Component } from '@angular/core';
import { ToastComponent } from "./utils/toast/toast.component";
import { LoaderService } from './services/loader-service/loader.service';
import { Observable } from 'rxjs';
import { LoaderComponent } from "./utils/loader/loader.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ToastComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agrosense-ui';
  isLoading: Observable<boolean> = new Observable<boolean>();
  isLoaderVisible: boolean = false;

  constructor(private loaderService: LoaderService) {
    this.isLoading = this.loaderService.loading$;
    this.isLoading.subscribe(value => {
      this.isLoaderVisible = value;
    });
  }
  
}
