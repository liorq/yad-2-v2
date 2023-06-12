import { Component } from '@angular/core';
import { searchColumnsRooms, searchItems } from 'src/app/data/array';

@Component({
  selector: 'app-search-columns',
  templateUrl: './search-columns.component.html',
  styleUrls: ['./search-columns.component.css']
})
export class SearchColumnsComponent {
isBtnRoomsOpen:boolean=false;
searchColumnsRooms =searchColumnsRooms
searchItems = searchItems
isAdvanceSearchOpen:boolean=false;
isDropDownOpen=[false,false]

}
