import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './pages/account/create-account/create-account.component';
import { LoginComponent } from './pages/account/login/login.component';
import { AuthGuard } from './pages/account/shared/auth.guard';
import { AuthenticationComponent } from './pages/layout/authentication/authentication.component';
import { HomeComponent } from './pages/layout/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {path: 'menu', component: DashboardComponent}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent},
      { path: 'create-account', component: CreateAccountComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
