import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customerId = '';
  errorMessage = '';
  constructor(private router: Router, translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  onChange(event: any): void {
    const {target: {value}} = event;
    this.errorMessage = '';
    this.customerId = value;
  }

  validate(value) {
    if (value === '') {
      this.errorMessage = 'Input value cannot be empty!';
      return false;
    }
    if (isNaN(value)) {
      this.errorMessage = 'Input value must be a number!';
      return false;
    }
    this.errorMessage = '';
    return true;
  }

  onSearch(id: string): void {
    if (this.validate(id)) {
      this.router.navigate([{outlets: {table: ['orders', id]}}]);
    } else {
      this.router.navigate(['']);
    }
  }
}
