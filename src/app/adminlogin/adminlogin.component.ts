import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})

export class AdminloginComponent implements OnInit {

  admin:Admin = new Admin("","");
  response : any

  constructor(private service:AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  public loginAdmin(){
    let resp = this.service.loginAdmin(this.admin);
    resp.subscribe(
      data => {
        this.service.saveAuthorizationToken(data['jwt']);
        this.router.navigateByUrl("admin/tickets");
      },
      err => alert ('invalid credentials!')
    )
  }
  
  public gotoUserlogin(){
    this.router.navigateByUrl('users/authenticate');
  }


}
