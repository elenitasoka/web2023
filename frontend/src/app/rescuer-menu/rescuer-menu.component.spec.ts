import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescuerMenuComponent } from './rescuer-menu.component';

describe('RescuerMenuComponent', () => {
  let component: RescuerMenuComponent;
  let fixture: ComponentFixture<RescuerMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RescuerMenuComponent]
    });
    fixture = TestBed.createComponent(RescuerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
