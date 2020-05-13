import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User= new User("","","","","","","","","","","","",0,"");
  response : any
  constructor(private service:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public loginUser(){
    let resp = this.service.loginUser(this.user);
    resp.subscribe(
      data => {
        this.service.saveAuthorizationToken(data['jwt']);
        this.router.navigateByUrl("users/tickets");
      },
      err => alert ('invalid credentials!')
    )
  }

  public gotoRegister(){
    this.router.navigateByUrl('/users/register');
  }

  public getPassword(){
    this.router.navigateByUrl('/users/getPassword');
  }

  public gotoAdminlogin(){
    this.router.navigateByUrl('/admin/authenticate');
  }

}
