import { TestRequest } from '@angular/common/http/testing';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  const router=inject(Router);
  const localdata = localStorage.getItem('batchUser');
  if (localdata != null) {
    return true;
  } else {
    router.navigateByUrl('/login')
    return false;
  }
};
