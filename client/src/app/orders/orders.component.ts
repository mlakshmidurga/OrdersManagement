import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { RootModule } from '@uirouter/angular';
import {UIRouter} from "@uirouter/angular";
import {ActivatedRoute} from '@angular/router';
import { StateService } from '@uirouter/angular';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http: HttpClient,private StateService: StateService,) { }

   orderObj: object = [];
  confirmationString: string = 'New Order has been Added';
  isAdded: boolean = false;


   addNewOrder(order){
     this.orderObj = {
       "orderno": order.orderno,
       "orderduedate": order.orderduedate,
       "customername":order.customername,
       "customeraddress":order.customeraddress,
       "customerphone":order.customerphone,
       "ordertotal":order.ordertotal

     }
     this.http.post('http://localhost:4300/orders', this.orderObj).subscribe(
      
     res => {
      this.isAdded = true; 
    this.StateService.go('home');
    //  this.uiRoute.navigate(['/home'])
         console.log(res)
       }
     )
   }
  ngOnInit() {
  }

}
