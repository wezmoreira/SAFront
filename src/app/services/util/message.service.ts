import { Injectable } from '@angular/core';
import UIkit from 'uikit';

type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
type Status = 'primary' | 'success' | 'warning' | 'danger' | undefined;

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  alert(
    message: string,
    status: Status,
    position: Position,
    timeout: number,
    group: string,
  ) {
    UIkit.notification(message, {
      pos: position,
      status: status,
      timeout: timeout,
      group: group,
    });
  }
}
