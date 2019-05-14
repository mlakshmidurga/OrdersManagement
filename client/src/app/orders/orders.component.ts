import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router,) { }

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
     this.router.navigate(['/home'])
         console.log(res)
       }
     )
   }
  ngOnInit() {
  }

}
