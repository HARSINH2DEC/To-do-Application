import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl }   from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
   form;
  ngOnInit() {
    this.form=new FormGroup({
    
      firstName : new FormControl(),
      lastName : new FormControl(),
      

    });
    
  }

  onsubmit=function(User){
    console.log(User);

  }

}
