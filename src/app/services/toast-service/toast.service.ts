import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  type: 'success' | 'error' | 'info';
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<ToastMessage | null>(null);
  toast$ = this.toastSubject.asObservable();

  success(message: string) {
    this.show({ type: 'success', text: message });
  }

  error(message: string) {
    this.show({ type: 'error', text: message });
  }

  info(message: string) {
    this.show({ type: 'info', text: message });
  }

  private show(toast: ToastMessage) {
    this.toastSubject.next(toast);
    setTimeout(() => {
      this.toastSubject.next(null); // auto dismiss after 3s
    }, 3000);
  }
}
