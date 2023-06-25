import { Component } from '@angular/core';
import { allCategories } from 'src/app/data/array';

@Component({
  selector: "app-publish",
  templateUrl: "./publish.component.html",
  styleUrls: ["./publish.component.css"],
})
export class PublishComponent {
  allCategories = allCategories;
}
