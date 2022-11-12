import { Component } from '@angular/core';
import { faTh, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'conect';
  faGear = faGear;
  faTh = faTh;
}
