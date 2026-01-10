import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  router = inject(Router);
  loggedUser: any;
  constructor() {
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if (localData != null) {
      this.loggedUser = JSON.parse(localData);
    }
  }
  logout() {
    const islogout = confirm('Are you sure you want to logout?');
    if (islogout) {
      localStorage.removeItem('batchUser');
      this.router.navigate(['/login']);
    }
  }
}
