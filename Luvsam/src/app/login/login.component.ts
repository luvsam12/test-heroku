import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private AuthenticationService:AuthenticationService,
              private Router: Router) { }

  ngOnInit(): void {
  }

  login(email,pass){
    this.AuthenticationService.login(email,pass).subscribe(
      data => {
        if(data.loginSuccess === true)
        {
          localStorage.setItem('token', JSON.stringify(data.authdata))
          this.Router.navigateByUrl("")
        }
      }
    )

  }

}
