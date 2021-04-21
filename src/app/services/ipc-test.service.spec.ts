import { TestBed } from '@angular/core/testing';

import { IpcTestService } from './ipc-test.service';

describe('IpcTestService', () => {
  let service: IpcTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpcTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
