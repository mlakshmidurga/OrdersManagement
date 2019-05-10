import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
orders;
id:number;
private headers = new HttpHeaders({'Content-Type': 'application/json'});

fetchdata(){
  this.http.get('http://localhost:4300/orders').subscribe(
    (res)=>{
      this.orders = res;

    },
    err=>{console.log(err)}
  )
}


deleteOrder(id){
  if(confirm('Are You Sure?')){
    const url ="http://localhost:4300/orders/" + id;
    return this.http.delete(url, {headers: this.headers}).toPromise().then(()=>{
      this.fetchdata();
    })
  }

}


updateOrder(id){

}
  ngOnInit() {
    this.fetchdata()
    
  }

}
