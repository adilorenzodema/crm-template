
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  A,
  Z,
  ZERO,
  NINE,
  SPACE, END, HOME,
} from '@angular/cdk/keycodes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css']
})
export class SelectFilterComponent implements OnInit, OnDestroy {
  @ViewChild('input', { static: true }) input: any;
  @Input() array: any;
  @Input() placeholder!: string;
  @Input() color!: string;
  @Input() displayMember!: string;
  @Input() showSpinner = true;
  @Input() noResultsMessage = 'No results';
  @Input() hasGroup!: boolean;
  @Input() groupArrayName!: string;
  @Output() filteredReturn = new EventEmitter<any>();
  noResults = false;
  localSpinner = false;
  public filteredItems: any = [];
  public searchForm: FormGroup;
  private searchFormValueChangesSubscription!: Subscription;

  constructor(fb: FormBuilder) {
    this.searchForm = fb.group({
      value: ''
    });
  }

  ngOnInit(): void {
    this.searchFormValueChangesSubscription = this.searchForm.valueChanges.subscribe(value => {
      if (this.showSpinner) {
        this.localSpinner = true;
      }
      if (value['value']) {
        // IF THE DISPLAY MEMBER INPUT IS SET WE CHECK THE SPECIFIC PROPERTY
        if (this.displayMember == null) {
          this.filteredItems = this.array.filter((name: any) => name.toLowerCase().includes(value['value'].toLowerCase()));
          // OTHERWISE, WE CHECK THE ENTIRE STRING
        } else if (this.hasGroup && this.groupArrayName && this.displayMember) {
          this.filteredItems = this.array.map((a: any) => {
            const objCopy = Object.assign({}, a);
            objCopy[this.groupArrayName] =
              objCopy[this.groupArrayName].filter((g: any) => g[this.displayMember].toLowerCase().includes(value['value'].toLowerCase()));
            return objCopy;
          }).filter((x: any) => x[this.groupArrayName].length > 0);
        } else {
          this.filteredItems = this.array.filter((name: any) => name[this.displayMember].toLowerCase().includes(value['value'].toLowerCase()));
        }
        // NO RESULTS VALIDATION

        this.noResults = this.filteredItems == null || this.filteredItems.length === 0;


      } else {
        this.filteredItems = this.array.slice();
        this.noResults = false;
      }
      this.filteredReturn.emit(this.filteredItems);
      setTimeout(() => {
        if (this.showSpinner) {
          this.localSpinner = false;
        }
      }, 2000);
    });

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 500);
    if (!this.placeholder) {
      this.placeholder = 'Search...';
    }
  }

  handleKeydown(event: KeyboardEvent): void {
    // PREVENT PROPAGATION FOR ALL ALPHANUMERIC CHARACTERS IN ORDER TO AVOID SELECTION ISSUES
    if (event.key && event.key.length === 1) {
      event.stopPropagation();
    }
  }
  ngOnDestroy(): void {
    this.filteredReturn.emit(this.array);
    this.searchFormValueChangesSubscription.unsubscribe();
  }
}
