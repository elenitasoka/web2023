import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminMenuComponent } from '../admin-menu/admin-menu.component';
import { TaskMenuComponent } from '../task-menu/task-menu.component';

@Component({
  selector: 'app-databasecategories',
  standalone: true,
  imports: [AdminMenuComponent, TaskMenuComponent, CommonModule, FormsModule],
  templateUrl: './databasecategories.component.html',
  styleUrl: './databasecategories.component.css'
 
})
export class DatabasecategoriesComponent {
  showCategoriesPage: boolean = false;
  showDbTaskPage: boolean = false;

      //gia na emfanizontai ta diaforetika components sto idio page
  toggleshowDatabasePage() {
    this.showCategoriesPage = !this.showCategoriesPage;
  }

  toggleshowNewRescuerPage() {
    this.showDbTaskPage = !this.showDbTaskPage;
  }

}
