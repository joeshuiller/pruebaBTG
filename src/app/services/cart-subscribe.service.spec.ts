import { TestBed } from '@angular/core/testing';

import { CartSubscribeService } from './cart-subscribe.service';

describe('CartSubscribeService', () => {
  let service: CartSubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartSubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
