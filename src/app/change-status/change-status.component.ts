import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent implements OnInit {

  ticket : Ticket= new Ticket(0,"","","","","","","","","","","",0,"","");
  message : any

  constructor(private service:HomeService, private router:Router) { }

  ngOnInit(): void {
    this.ticket = this.service.getTicket();
  }

  public gotoHome(){
    this.router.navigateByUrl('/admin/tickets');
  }

  public updateStatus(){
    let resp = this.service.updateStatus(this.ticket);
    resp.subscribe(data => this.message = data);
    alert('Status changed');
  }



}
