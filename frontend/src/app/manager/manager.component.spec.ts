import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerComponent } from './manager.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ManagerComponent', () => {
  let component: ManagerComponent;
  let fixture: ComponentFixture<ManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should form', () => {
    expect(component).toBeTruthy();
  });
});
