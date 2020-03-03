import { TestBed } from '@angular/core/testing';

import { FormspreeService } from './formspree.service';

describe('FormspreeService', () => {
  let service: FormspreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormspreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
