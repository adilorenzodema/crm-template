import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class LibFooterComponent {

  constructor(@Inject('footer') public footer: any) { }

}
