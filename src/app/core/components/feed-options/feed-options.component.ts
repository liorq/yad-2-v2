import { Component, Input } from '@angular/core';
import { feedButtons } from 'src/app/data/array';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-feed-options',
  templateUrl: './feed-options.component.html',
  styleUrls: ['./feed-options.component.css']
})
export class FeedOptionsComponent {
isFilterOptionsOpen=false;
isFilterResultOpen=false;
@Input()allAds:apartment[]=[]
buttons =feedButtons
  toggleBtn(btnType: string) {
    console.log(btnType)
    if(btnType=='checkbox'||btnType=='radio'){
    const targetProperty = btnType === 'radio' ? 'isFilterOptionsOpen' : 'isFilterResultOpen';
    const milliseconds = !this[targetProperty] ? 0 : 1000;

    setTimeout(() => {
      this[targetProperty] = !this[targetProperty];
    }, milliseconds);

    }

  }

}
