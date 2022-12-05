import { Component, OnInit } from '@angular/core';
import { MENUITEMS } from 'src/app/shared/costants/menu';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems = MENUITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
