import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css']
})
export class ToDoAppComponent {

  items=['angular','react','typescript'];
  newItem="";
  addItem=function(){
    if(this.newItem !== ''){
   this.items.push(this.newItem);
   this.newItem="";
  }
 
 }
 
 delItem=function(index){
   this.items.splice(index,1);
   
 }
 
}
