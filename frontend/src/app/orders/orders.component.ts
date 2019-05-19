import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  id: string;
  allItems = [];
  pages: number;
  currentPage: number;
  currentItems = [];
  error = null;
  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private paginationService: PaginationService
  ) {
    activatedRoute.params.forEach(params => {
      this.getNewId(params['id']);
    });
  }

  getNewId(id) {
    if (this.id !== id) {
      this.id = id;
      this.getOrders(id);
    }
  }

  getOrders(id) {
    this.ordersService.getOrders(id).subscribe(data => {
      if (data !== null) {
        this.allItems = data.orders;
      } else {
        this.allItems = [];
      }
      this.setPage(1);
    }, error => {
      this.error = {message: 'Unexpected Error occurred!'};
    });
  }

  setPage(page: number) {
    this.currentPage = page;
    const { startIndex, endIndex, totalPages } = this.paginationService.getPaginator(this.allItems.length, page);
    this.currentItems = this.allItems.slice(startIndex, endIndex + 1);
    this.pages = totalPages;
  }
}
