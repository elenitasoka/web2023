import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasecategoriesComponent } from './databasecategories.component';

describe('DatabasecategoriesComponent', () => {
  let component: DatabasecategoriesComponent;
  let fixture: ComponentFixture<DatabasecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabasecategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatabasecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
