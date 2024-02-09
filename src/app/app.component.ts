import { Component, computed, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmer-app';
  collapsed = signal(false);

  sideNavWidth   = computed(()=> this.collapsed()? '65px':'250px');
}
