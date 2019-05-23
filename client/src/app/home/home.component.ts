import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
 import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
// import { StateService } from '@uirouter/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) { }
  id:number;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  orderObj:object = {};
  confirmationString: string = 'New Order has been Added';
  isAdded: boolean = false;
  data:object = {};
  orders;
  fileUrl;

  displayedColumns: string[] = ['id', 'orderid', 'orderduedate', 'customername', 'customeraddress', 'customerphone', 'ordertotal'];
  // Fetch The Data
  fetchdata(){
    this.http.get('http://localhost:4300/orders').subscribe(
      (res)=>{
        this.orders = res;
      },
      err=>{console.log(err)}
    )
  }

  // Update Orders
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
    console.log(this.orderObj)
    const url ="http://localhost:4300/orders/" + this.id;
    this.http.put(url, JSON.stringify(this.orderObj), {headers: this.headers}).toPromise().then(()=>{
      this.router.navigate(['/home'])
      
    // this.StateService.go('home');
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

 
  ngOnInit() {

    // const data = 'http://localhost:4300/orders';
    // const blob = new Blob([data], { type: 'text/csv' });

    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    this.fetchdata()
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    })
    this.http.get('http://localhost:4300/orders').subscribe(
    (res)=>{
      this.orders = res;
      console.log(this.orders);
      for(var i = 0; i < this.orders.length; i++){
        if(parseInt(this.orders[i].id) === this.id){
          this.data= this.orders[i];
          console.log(this.data)
          break;
        }
      }
    },
    err=>{console.log(err)}
    )
  }

}
