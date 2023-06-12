import { Component } from '@angular/core';
import { advanceSearchCheckBoxOptions, advanceSearchFloorOptions } from 'src/app/data/array';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent {
arrayOfCheckBox=advanceSearchCheckBoxOptions
floors = advanceSearchFloorOptions
textValue = 'כניסה מיידית';
}
