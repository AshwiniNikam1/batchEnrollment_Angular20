import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginModel } from '../../core/constant/model/interfaces/loginModel';
import { Loginservice } from '../../core/services/loginService/loginservice';
import { GlobalConstant } from '../../core/constant/Global.constant';


@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  submitted :boolean= false;
  router = inject(Router);
  loginUserObj: LoginModel = {
    email: '',
    password: '',
  };
  loginService = inject(Loginservice);

  loginUser() {
    this.loginService.loginUser(this.loginUserObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          localStorage.setItem(GlobalConstant.LOCAL_KEY_LOGIN, JSON.stringify(res.data));
          alert('Login Successful');
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err: any) => {
      if (err.status === 401) {
      alert(err.error?.message || 'Invalid username or password');
    } else {
      alert('Something went wrong. Try again.');
    }
      },
    });
  }
  onSubmit(loginForm:any) {
      this.submitted = true
    debugger;
    if(loginForm.invalid){
  // loginForm.markAllAsTouched();
      return;
    }
    console.log(this.loginUserObj, 'login');
    this.loginUser();
  }
}
