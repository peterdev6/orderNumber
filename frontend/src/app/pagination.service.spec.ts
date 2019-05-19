import { TestBed, inject } from '@angular/core/testing';

import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService]
    });
  });

  it('should be created', inject([PaginationService], (service: PaginationService) => {
    expect(service).toBeTruthy();
  }));

  it('should return total pages, startIndex, and endIndes correctly when total items is 5', inject(
    [PaginationService],
    (service: PaginationService) => {
      const totalItems = 5;
      const { startIndex, endIndex, totalPages } = service.getPaginator(totalItems);
      expect(startIndex).toBe(0);
      expect(endIndex).toBe(4);
      expect(totalPages).toBe(1);
    }
  ));
});
