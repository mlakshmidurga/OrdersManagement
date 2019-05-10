import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import {HomeComponent} from './home/home.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
const routes: Routes = [
  {
    path: '', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'orders', component: OrdersComponent
  },
  {
    path: 'updateOrder/:id', component: UpdateOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
