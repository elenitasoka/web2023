import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescuerTasksMenuComponent } from './rescuer-tasks-menu.component';

describe('RescuerTasksMenuComponent', () => {
  let component: RescuerTasksMenuComponent;
  let fixture: ComponentFixture<RescuerTasksMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RescuerTasksMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RescuerTasksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
