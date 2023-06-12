import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-generic-container',
  templateUrl: './generic-container.component.html',
  styleUrls: ['./generic-container.component.css','../../../auth/sign-in/sign-in.component.css']
})
export class GenericContainerComponent implements OnInit{
@Input()containerClass!:string;
@Input()arrayOfContent!:any[];
ngOnInit(): void {
 console.log(this.arrayOfContent)
}
}
