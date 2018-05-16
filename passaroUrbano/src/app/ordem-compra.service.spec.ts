import { TestBed, inject } from '@angular/core/testing';

import { OrdemCompraService } from './ordem-compra.service';

describe('OrdemCompraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdemCompraService]
    });
  });

  it('should be created', inject([OrdemCompraService], (service: OrdemCompraService) => {
    expect(service).toBeTruthy();
  }));
});
