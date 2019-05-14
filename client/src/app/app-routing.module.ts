import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import {RootModule, UIRouterModule} from '@uirouter/angular';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import {HomeComponent} from './home/home.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
const rootModule: RootModule = {
  states: [
    {
      name: 'home', url:'/home', component: HomeComponent
    },
    
    {
      name:'register', url:'/register', component: RegisterComponent
    },
    {
      name: 'login', url:'/login', component: LoginComponent
    },
    {
      name: 'orders', url:'/orders', component: OrdersComponent
    },
    {
      name: 'updateOrder', url:'/updateOrder/:orderid', component: UpdateOrderComponent
    }
  ],
  useHash: true,
  otherwise: "/home"
  
}

@NgModule({
  imports: [UIRouterModule.forRoot(rootModule)],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
