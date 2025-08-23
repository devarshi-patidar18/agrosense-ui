import { Component } from '@angular/core';
import { ToastMessage, ToastService } from '../../services/toast-service/toast.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-toast',
  imports: [FormsModule,CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  toast: ToastMessage | null = null;

  constructor(private toastService: ToastService) {
    this.toastService.toast$.subscribe(msg => this.toast = msg);
  }
}
