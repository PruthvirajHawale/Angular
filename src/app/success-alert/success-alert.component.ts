import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p>This is success component</p>`,
  styles: [`
    p{
      padding: 20px;
      background-color: lightgreen;
      border: 1px solid green;
    }
  `]
})
export class SuccessAlertComponent {

}
