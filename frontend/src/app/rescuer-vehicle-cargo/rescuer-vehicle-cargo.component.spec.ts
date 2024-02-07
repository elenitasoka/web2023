import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescuerVehicleCargoComponent } from './rescuer-vehicle-cargo.component';

describe('RescuerVehicleCargoComponent', () => {
  let component: RescuerVehicleCargoComponent;
  let fixture: ComponentFixture<RescuerVehicleCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RescuerVehicleCargoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RescuerVehicleCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
