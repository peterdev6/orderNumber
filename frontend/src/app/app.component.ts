import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customerId = '';
  errorMessage = '';
  constructor(private router: Router) { }

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
