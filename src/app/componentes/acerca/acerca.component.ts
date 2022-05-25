import { Component, Input, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  
  @Input()acerca:any;
  
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.acerca=data;
    });
    
  }
}


function cambiar_parrafo():void{
  document.getElementById("edit-acerca");
  document.getElementById("filel");
  let texto=document.getElementById("text-acerca");
  console.log(texto);
};
cambiar_parrafo();


function myFunction2(valor:any):void{
       document.getElementById("text-acerca");
  }
  myFunction2

function logMessage(message:any){
  console.log(message+"<br>");
  }
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
*/
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

