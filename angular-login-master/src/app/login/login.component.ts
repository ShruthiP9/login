import { ServService } from './../../serv.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tabledata=[];
  found:boolean;
  
  
  
  
  constructor(private sservice:ServService){
    
  }
  
  ngOnInit(){
    this.sservice.getPosts().subscribe(responseposts=>{this.tabledata=responseposts});

    
  }

   shruthi(ss) {
 
   
    for(let i=0;i<this.tabledata.length;i++){
      console.log(this.tabledata[i].email);
      if((this.tabledata[i].email===ss.email || this.tabledata[i].username===ss.username ||this.tabledata[i].phone) && this.tabledata[i].password===ss.password)
     
        {

   this.found=true;
    
         }
         
         
      
        
}



}
 
}



