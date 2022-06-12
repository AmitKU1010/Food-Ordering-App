import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]=[];
  constructor(private foodService:FoodService,private router:ActivatedRoute) { }

  ngOnInit(): void {
   this.foods= this.foodService.getAll();
  this.router.params.subscribe(params=>{
  if(params.searchItem)
  })
  }

}
