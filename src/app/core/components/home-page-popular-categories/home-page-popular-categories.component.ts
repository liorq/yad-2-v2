import { Component } from '@angular/core';
import { PopularCategoriesArray } from 'src/app/data/array';

@Component({
  selector: 'app-home-page-popular-categories',
  templateUrl: './home-page-popular-categories.component.html',
  styleUrls: ['./home-page-popular-categories.component.css']
})
export class HomePagePopularCategoriesComponent {
  PopularCategoriesArray=PopularCategoriesArray

}
