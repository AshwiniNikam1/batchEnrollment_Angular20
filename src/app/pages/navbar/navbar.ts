import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from '../../constant/global.constant';

@Component({
  selector: 'app-navbar',
  imports: [],
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
