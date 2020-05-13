import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../ticket';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  ticket : Ticket= new Ticket(0,"","","","","","","","","","","",0,"","");
  tickets:Ticket[]
  message : any

  constructor(private service:HomeService, private router:Router) { }

  ngOnInit(): void {
    let resp = this.service.getAllTickets();
    resp.subscribe(data => this.tickets = data);
    console.log(this.tickets);
  }

  public changeStatus(ticket){
    this.service.setTicket(ticket);
    this.router.navigateByUrl("admin/tickets/changeStatus");
  }
}
