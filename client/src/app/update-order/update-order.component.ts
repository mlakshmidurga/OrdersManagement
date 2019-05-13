import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
id: number;
data: object = {};
orders;
orderObj:object = {}

private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  updateOrder( order){
    this.orderObj = {
      "id":order.id,
      "orderno": order.orderno,
      "orderduedate": order.orderduedate,
      "customername":order.customername,
      "customeraddress":order.customeraddress,
      "customerphone":order.customerphone,
      "ordertotal":order.ordertotal

    }
    const url ="http://localhost:4300/orders/" + this.id;
    this.http.put(url, JSON.stringify(this.orderObj), {headers: this.headers}).toPromise().then(()=>{
this.router.navigate(['/']);
    })
  }
  ngOnInit() {

    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    })

    this.http.get('http://localhost:4300/orders').subscribe(
    (res)=>{
      this.orders = res;
      for(var i = 0; i < this.orders.length; i++){
        if(parseInt(this.orders[i].id) === this.id){
          this.data= this.orders[i];
          break;
        }
      }
    },
    err=>{console.log(err)}
  )
  }



}
