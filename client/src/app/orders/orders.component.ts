import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http: HttpClient) { }

   orderObj: object = [];



   addNewOrder(order){
     this.orderObj ={
       "orderno": order.orderno,
       "orderduedate": order.orderduedate,
       "customername":order.customername,
       "customeraddress":order.customeraddress,
       "customerphone":order.customerphone,
       "ordertotal":order.ordertotal

     }
     this.http.post('http://localhost:4300/orders', this.orderObj).subscribe(
       res => {
         console.log(res)
       }
     )
   }
  ngOnInit() {
  }

}
