import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  explist:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.explist=data.experience;
    });
  }
  eliminar(id:any):void{
    console.log("hello");
    this.datosPorfolio.eliminar(id).subscribe(
    (data)=>{
      this.datosPorfolio.obtenerDatos();
      console.log(data);
    })
  }
  oculto=true;
  keypress(event:any){
    console.log("keyup");
    
    this.oculto=!this.oculto;
    
  }
  
  read(event:any){
  
    let reader = new FileReader();
    reader.onload=function(progressEvent): void{
      let ouput:any=document.getElementById("filel");
      ouput.src=reader.result;
      console.log(reader.result);
      let salida:any = document.getElementById("edit-acerca")
      salida.innerText=reader.result;
      
    }
    
    if(event.target.files[0]){
     reader.readAsText(event.target.files[0])

    }
  
    this.explist.innerText=reader.result
    this.oculto=!this.oculto;
  }
  
}
