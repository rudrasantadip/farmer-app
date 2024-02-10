import { Component, Input, computed, signal } from '@angular/core';

export interface MenuItem {
  icon:string;
  label:string;
  route?:string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent 
{
    menuItems = signal<MenuItem[]>([
      {
        icon:'dashboard',
        label:'Dashboard',
        route:'dashboard'
      },
      {
        icon:'android',
        label:'Prime Bots',
        route:'primebots'
      },
      {
        icon:'adb',
        label:'Sub Bots',
        route:'subbots'
      },
      {
        icon:'settings',
        label:'Settings',
        route:'settings'
      },
      {
        icon:'person_add',
        label:'Login',
        route:'login'
      },
      {
        icon:'domain',
        label:'Register',
        route:'register'
      },
    ]);

    sideNavCollapsed = signal(false);
    @Input() set collapsed(val:boolean)
    {
      this.sideNavCollapsed.set(val);
    }

    profilePicSize = computed(()=>this.sideNavCollapsed()?'32':'100')
}
