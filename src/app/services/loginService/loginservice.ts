import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginModel } from '../../constant/model/loginModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  http=inject(HttpClient);
  private baseUrl="https://feestracking.freeprojectapi.com/api/BatchUser/";
  
  loginUser(data:LoginModel):Observable<LoginModel>{
    return this.http.post<LoginModel>(`${this.baseUrl}login`,data);
  }
}
