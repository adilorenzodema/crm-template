import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/components/domain/interface';
import { AuthService } from 'src/app/service/auth.service';
import { MENUITEMS } from 'src/app/shared/costants/menu';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: Menu[] = [];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.menuItems = (JSON.parse(String(localStorage.getItem('User'))).menu as Menu[]);
  }

}
