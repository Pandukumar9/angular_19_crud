import { Component } from '@angular/core';
import { MobilesComponent } from './components/mobiles/mobiles.component';

@Component({
  selector: 'app-root',
  imports: [MobilesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_19_crud';
}
