import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ReqpageComponent } from './reqpage.component';

describe('reqpageComponent', () => {
  let component: ReqpageComponent;
  let fixture: ComponentFixture<ReqpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqpageComponent]
    });
    fixture = TestBed.createComponent(ReqpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
