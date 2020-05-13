import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User= new User("","","","","","","","","","","","",0,"");
  message : any

  constructor(private service:UserRegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  public registerUser(){
    let resp = this.service.doRegistration(this.user);
    resp.subscribe((data : any) => this.message=data);
    
  }
  public gotoLogin(){
    this.router.navigateByUrl('/users/authenticate');
  }

}
