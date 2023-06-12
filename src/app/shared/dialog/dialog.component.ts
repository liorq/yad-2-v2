import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  modalTitle: string = 'Login';

  constructor() {}

  ngOnInit(): void {
    // Plugin options and our code


  }
}
