import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRescuerComponent } from './new-rescuer.component';

describe('NewRescuerComponent', () => {
  let component: NewRescuerComponent;
  let fixture: ComponentFixture<NewRescuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRescuerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRescuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
