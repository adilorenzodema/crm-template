import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crm-centro-estetico';
  constructor(private _formBuilder: FormBuilder) {}
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });
}
