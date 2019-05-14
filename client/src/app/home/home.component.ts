import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
// import {ActivatedRoute} from '@angular/router';
import { StateService } from '@uirouter/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private StateService: StateService) { }

id:number;
private headers = new HttpHeaders({'Content-Type': 'application/json'});
orderObj:object = {};
  confirmationString: string = 'New Order has been Added';
  isAdded: boolean = false;
  data:object = {};
  orders;
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
      this.fetchdata()
      this.StateService.go('home')
         console.log(res)
       }
     )
   }

fetchdata(){
  this.http.get('http://localhost:4300/orders').subscribe(
    (res)=>{
      this.orders = res;

    },
    err=>{console.log(err)}
  )
}
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
this.StateService.go('home');
  })
}
// goToEdit(id){
//   this.router.navigate(['updateOrder/' + id]);
// }
deleteOrder(id){
  if(confirm('Are You Sure?')){
    const url ="http://localhost:4300/orders/" + id;
    return this.http.delete(url, {headers: this.headers}).toPromise().then(()=>{
      this.fetchdata();
    })
  }

}


  ngOnInit() {
    this.fetchdata()
  //   this.route.params.subscribe(params =>{
  //     this.id = +params['id'];
  //   })

  //   this.http.get('http://localhost:4300/orders').subscribe(
  //   (res)=>{
  //     this.orders = res;
  //     console.log(this.orders);
  //     for(var i = 0; i < this.orders.length; i++){
  //       if(parseInt(this.orders[i].id) === this.id){
  //         this.data= this.orders[i];
  //         console.log(this.data)
  //         break;
  //       }
  //     }
  //   },
  //   err=>{console.log(err)}
  // )
  }

}
