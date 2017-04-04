import { TestBed, inject } from '@angular/core/testing';
import { TesteService } from './teste.service';

describe('TesteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesteService]
    });
  });

  it('should ...', inject([TesteService], (service: TesteService) => {
    expect(service).toBeTruthy();
  }));
});
