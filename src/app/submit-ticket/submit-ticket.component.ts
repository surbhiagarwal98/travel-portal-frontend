import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent implements OnInit {

  ticket : Ticket= new Ticket(0,"","","","","","","","","","","",0,"","");
  message : any

  constructor(private service:HomeService, private router:Router) { }

  ngOnInit(): void {
  }

  public gotoHome(){
    this.router.navigateByUrl('/users/tickets');
  }

  public submitTicket(){
    let resp = this.service.submitTicket(this.ticket);
    resp.subscribe(data => this.message = data);
  }

}
