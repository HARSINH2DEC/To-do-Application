import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
