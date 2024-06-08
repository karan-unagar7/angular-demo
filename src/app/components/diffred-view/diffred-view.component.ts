import { Component } from '@angular/core';
import { HeavyComponent } from '../heavy/heavy.component';

@Component({
  selector: 'app-diffred-view',
  standalone: true,
  imports: [HeavyComponent],
  templateUrl: './diffred-view.component.html',
  styleUrl: './diffred-view.component.css'
})
export class DiffredViewComponent {

}
