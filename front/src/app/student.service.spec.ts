/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonService } from './student.service';

describe('StudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentService]
    });
  });

  it('should ...', inject([StudentService], (service: StudentService) => {
    expect(service).toBeTruthy();
  }));
});
