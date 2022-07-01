import { Component, Input, NgModule, OnInit, Type } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  
  acerca:any;
 
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.acerca=data.about;
    });
    
    
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
  
    this.acerca.innerText=reader.result
    this.oculto=!this.oculto;
  }
 
  
 /*document.getElementById("myBtn").addEventListener("click", function() {

    var reader = new FileReader();
    reader.addEventListener('load', function() {
      document.getElementById('file').innerText = this.result;
    });
    reader.readAsText(document.querySelector('input').files[0]);
  
  });
  /*
  reader = new FileReader();
   file=document.getElementById("filel")
  texto= this.file
  read(event:any): void{
    this.reader.readAsText(this.texto)
    this.reader.result
  this.oculto=!this.oculto;
  }*/
    

/*
 logMessage
  // controla si se presiono un enter
 /*let textarea:any=document.getElementById( "edit-acerca")
  
  textarea.addEventListener('keyup',(e) => {
  logMessage(`Key "${e.key}"released [event:keyup]`) ;
   if(e.key =="Enter"){
         textarea.style.display="none"
         document.getElementById("filel")
             }
       });

  // carga el contenido de un archivo de texto
  //y lo muestra en el parrafo
  
  function showFile(input:any) {
       let file = input.files[0];-
       alert(`File name: $ {file.name}`);// e.g my.png
       alert(`Last modified:${file.lastModified}`) ;
       showFile
  let reader=new FileReader();
       reader.readAsText(file);
       reader.onload=function(progressEvent){
       console.log(reader.result);
       document.getElementById("text-acerca");
  };
  reader.onerror=function(){
       console.log(reader.error);
  };
};
*/}
