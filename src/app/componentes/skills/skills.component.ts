import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skilist:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.skilist=data.skills;
    });
    function ajusta():void {
      let horizontales:any = document.querySelectorAll("#graficos .horizontal"); 
      let elem:number= 0; 
      while(elem < horizontales.length) {
      horizontales[elem].style.transition = "background-size 2s ease-in-out 1s"; 
      horizontales[elem].style.backgroundSize = horizontales[elem].innerHTML+" 100%"; 
      elem++; 
      }; 
    }
    onload = ajusta; 
    
   
  }

}
