import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  ticket : Ticket= new Ticket(0,"","","","","","","","","","","",0,"","");
  message: any

  constructor(private service:HomeService, private router:Router) { }

  ngOnInit(): void {
    this.ticket = this.service.getTicket();
  }

  updateTicket(){
    let resp = this.service.updateTicket(this.ticket);
    resp.subscribe((data : any) => this.message=data);
    this.router.navigateByUrl("users/tickets");
  }

  gotoHome(){
    this.router.navigateByUrl("users/tickets");
  }

  
  
  
  
  
  
  


}
