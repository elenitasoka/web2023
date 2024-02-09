import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMapComponent } from './new-map.component';

describe('NewMapComponent', () => {
  let component: NewMapComponent;
  let fixture: ComponentFixture<NewMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
