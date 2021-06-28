import {TestBed} from '@angular/core/testing';

import {ApprovalService} from './approval.service';
import {AuthService} from "./auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ApprovalService', () => {
  let service: ApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(ApprovalService);
  });

  it('should be initialised', () => {
    expect(service).toBeTruthy();
  });
});
