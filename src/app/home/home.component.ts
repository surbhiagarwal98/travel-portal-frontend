import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../ticket';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ticket : Ticket= new Ticket(0,"","","","","","","","","","","",0,"","");
  tickets:Ticket[]
  message : any

  constructor(private service:HomeService, private router:Router) { }

  ngOnInit(): void {
  }

  public submitTicket(){
    this.router.navigateByUrl('/users/tickets/submit');
  }
  public viewTickets(){
    let resp = this.service.viewTickets();
    resp.subscribe(data => this.tickets = data);
  }

  public editTicket(ticket){
    this.service.setTicket(ticket);
    this.router.navigateByUrl("users/tickets/edit");
  }

}
