import { Injectable } from '@angular/core';
import { NotificationsComponent } from '../notifications/notifications.component';

@Injectable()
export class ErrorHandler {

  constructor(
    private notify: NotificationsComponent
  ) {}

  public handleError(err: any) {
    this.notify.showNotification('top','right',err.error.error);
  }
}