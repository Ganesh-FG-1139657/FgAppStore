import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FgAppListComponent } from './fg-app-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.service';
// const routes: Routes = [
//   {
//     path: '',
//     component: FgLayoutComponent,
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
//       // Other routes within FgLayoutComponent
//       { path: '', redirectTo: 'login', pathMatch: 'full' },
//       { path: '**', redirectTo: 'login' }
//     ]
//   }
// ];

// const routes: Routes = [
//   {path:'fgApp',component:FgAppListComponent,children:[
//     {path:'login',component:LoginComponent},
//     {path:'home',component:HomeComponent},
//   ]},
// ];
const routes: Routes = [
  {path:'fgApp',component:FgAppListComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent, canActivate: [AuthGuard] },
    // { path: '**', redirectTo: 'home' }
  ]},
];



@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FgAppListRoutingModule { }



// const routes: Routes = [
//   {path:'auth',component:AuthComponent,children:[
//     {path:'login',component:LoginComponent},
//     {path:'test',component:TestComponent},
//   ]},
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AuthRoutingModule { }





// fgapp-routing.module.ts (inside FgAppModule)

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { AuthGuard } from './auth.guard';

// const fgAppRoutes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
//   // Other routes within FgAppModule...
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page by default
//   { path: '**', redirectTo: '/login' } // Redirect to login page for any unmatched route
// ];

// @NgModule({
//   imports: [RouterModule.forChild(fgAppRoutes)],
//   exports: [RouterModule]
// })
// export class FgAppRoutingModule { }
