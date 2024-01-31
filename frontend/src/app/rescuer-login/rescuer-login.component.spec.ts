import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescuerLoginComponent } from './rescuer-login.component';

describe('RescuerLoginComponent', () => {
  let component: RescuerLoginComponent;
  let fixture: ComponentFixture<RescuerLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RescuerLoginComponent]
    });
    fixture = TestBed.createComponent(RescuerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
