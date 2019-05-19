import { OrdersService } from './orders.service';
import { asyncData, asyncError } from '../testing/async-observable-helpers';
import { HttpErrorResponse } from '@angular/common/http';

let httpClientSpy: { get: jasmine.Spy };
let ordersService: OrdersService;

describe('OrdersService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    ordersService = new OrdersService(<any> httpClientSpy);
  });

  it('should return expected orders (HttpClient called once)', () => {
    const expectedOrders = [{id: '1', name: 'fake name 1'}, {id: '2', name: 'fake name 2'}];
    httpClientSpy.get.and.returnValue(asyncData(expectedOrders));

    ordersService.getOrders('123').subscribe(orders => {
      expect(orders).toEqual(expectedOrders, 'expected orders');
    });

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    ordersService.getOrders('123').subscribe(
      orders => fail('expected an error, not orders'),
      error  => expect(error.error).toEqual('test 404 error')
    );
  });
});
