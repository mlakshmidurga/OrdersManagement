import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
// import {RootModule, UIRouterModule} from '@uirouter/angular';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import {HomeComponent} from './home/home.component';
import { UpdateOrderComponent } from './update-order/update-order.component';


const router: Routes =[

  {path: 'updateorder/:id', component: UpdateOrderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'orders', component: OrdersComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}

]

// Ui Router Routing
// const rootModule: RootModule = {
//   states: [
//     {
//       name: 'home', url:'/home', component: HomeComponent
//     },
    
//     {
//       name:'register', url:'/register', component: RegisterComponent
//     },
//     {
//       name: 'login', url:'/login', component: LoginComponent
//     },
//     {
//       name: 'orders', url:'/orders', component: OrdersComponent
//     },
//     {
//       name: 'updateOrder', url:'/updateOrder/:orderId',  component: UpdateOrderComponent
//     }
//   ],
//   useHash: true,
//   otherwise: "/login"
// }

@NgModule({
  // imports: [UIRouterModule.forRoot(rootModule)],
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
