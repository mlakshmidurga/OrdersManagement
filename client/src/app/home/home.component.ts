import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';

// import { StateService } from '@uirouter/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  id:number;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  orderObj:object = {};
  confirmationString: string = 'New Order has been Added';
  isAdded: boolean = false;
  data:object = {};
  orders;
  
  // Fetch The Data
  fetchdata(){
    this.http.get('http://localhost:4300/orders').subscribe(
      (res)=>{
        this.orders = res;
      },
      err=>{console.log(err)}
    )
  }

getOrder(id){
  this.data = this.orders.filter(x => x.id === id)[0]
}

  // Update Orders
  updateOrder(order){
    this.orderObj = {
      "id":order.id,
      "orderno": order.orderno,
      "orderduedate": order.orderduedate,
      "customername":order.customername,
      "customeraddress":order.customeraddress,
      "customerphone":order.customerphone,
      "ordertotal":order.ordertotal
    }
    console.log(this.orderObj)
    const url ="http://localhost:4300/orders/" + this.id;
    this.http.put(url, JSON.stringify(this.orderObj), {headers: this.headers}).toPromise().then(()=>{
      this.router.navigate(['/home'])
    })
  }

  // Delete Orders
  deleteOrder(id){
    if(confirm('Are You Sure?')){
      const url ="http://localhost:4300/orders/" + id;
      return this.http.delete(url, {headers: this.headers}).toPromise().then(()=>{
        this.fetchdata();
      })
    }
  }

// form reset
  resetForm(form?: NgForm){
    if(form){
    form.resetForm();
    this.orderObj = {}; 
    this.fetchdata()
  }
}
 
  ngOnInit() {
    this.fetchdata()
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    })
    this.http.get('http://localhost:4300/orders').subscribe(
    (res)=>{
      this.orders = res;
      console.log(this.orders);
    },
    err=>{console.log(err)}
    )
  }

}
