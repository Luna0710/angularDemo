import { Component, OnInit } from '@angular/core';
import {Hero} from  '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
   //获取heroes值
   heroes : Hero[];
   //定义变量selectedHero
    selectedHero:Hero;
    //选中英雄触发事件
  ngOnInit() { 
    this.getHeroes()
  }
  constructor(private heroService: HeroService) {
    
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes=>{
         this.heroes=heroes
      }
    )
  }
  
  onSelect(hero:Hero):void{
    this.selectedHero=hero
  }
 

  

}
