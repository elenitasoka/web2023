import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestpageComponent } from './Requestpage.component';

describe('RequestpageComponent', () => {
  let component: RequestpageComponent;
  let fixture: ComponentFixture<RequestpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestpageComponent]
    });
    fixture = TestBed.createComponent(RequestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
