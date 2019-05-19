import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {
  getPaginator(totalItems: number, currentPage: number = 1, pageSize: number = 5) {
    const totalPages = Math.ceil(totalItems / pageSize);
      // ensure current page isn't out of range
      if (currentPage < 1) {
          currentPage = 1;
      } else if (currentPage > totalPages) {
          currentPage = totalPages;
      }
      // calculate start and end item indexes
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
      return {
        startIndex,
        endIndex,
        totalPages
      };
  }

}
