import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Navbar } from './pages/navbar/navbar';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login', pathMatch:'full'
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'',
        component:Layout,
        children:[{
            path:'dashboard',
            component:Navbar
        }]
    }
];
