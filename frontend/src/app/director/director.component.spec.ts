import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorComponent } from './director.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DirectorComponent', () => {
  let component: DirectorComponent;
  let fixture: ComponentFixture<DirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should form', () => {
    expect(component).toBeTruthy();
  });
});
