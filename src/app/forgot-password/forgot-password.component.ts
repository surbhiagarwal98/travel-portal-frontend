import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ForgotPasswordService } from '../forgot-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user : User= new User("","","","","","","","","","","","",0,"");
  message : any

  constructor(private service:ForgotPasswordService, private router: Router) { }

  ngOnInit(): void {
  }

  public getPassword(){
    let resp = this.service.getPassword(this.user.email);
    resp.subscribe((data : any) => this.message = data);
  }
  public gotoLogin(){
    this.router.navigateByUrl('users/authenticate');
  }
}
