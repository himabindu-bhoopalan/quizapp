import { TestBed } from '@angular/core/testing';

import { QuizzingService } from './quizzing.service';

describe('QuizzingService', () => {
  let service: QuizzingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
