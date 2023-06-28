
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { personalIcons, personalSidebarConfigs, personalSidebarItems } from 'src/app/data/array';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit{
  personalIcons =personalIcons
  sideBarId='sidenavForPersonalPage';
  personalSidebarItems = personalSidebarItems
  personalSidebarConfigs = personalSidebarConfigs
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.url.subscribe(segments => {
      console.log(segments.map(s => s.path));
    });
  }



}
