import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
orders;


fetchdata(){
  this.http.get('http://localhost:4300/orders').subscribe(
    (res)=>{
      this.orders = res;

    },
    err=>{console.log(err)}
  )
}
  ngOnInit() {
    this.fetchdata()
  }

}
