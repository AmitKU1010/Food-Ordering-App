import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:true,
      origins:['odisha','arunachal'],
      star:4,
      imageUrl:'/assets/2.jpeg',
      tags:['fastFood'],
      price:10
     },
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:true,
      origins:['odisha'],
      star:3,
      imageUrl:'/assets/2.jpeg',
      tags:['fastFood'],
      price:10
     }
     ,
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:true,
      origins:['odisha','arunachal'],
      star:1.5,
      imageUrl:'/assets/2.jpeg',
      tags:['fastFood'],
      price:10
     },
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:false,
      origins:['odisha','arunachal'],
      star:4,
      imageUrl:'/assets/3.jpeg',
      tags:['fastFood'],
      price:10
     },
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:false,
      origins:['odisha','arunachal'],
      star:4,
      imageUrl:'/assets/4.jpeg',
      tags:['fastFood'],
      price:10
     },
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:false,
      origins:['odisha','arunachal'],
      star:4,
      imageUrl:'/assets/2.jpeg',
      tags:['fastFood'],
      price:10
     },
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:false,
      origins:['odisha','arunachal'],
      star:4,
      imageUrl:'/assets/3.jpeg',
      tags:['fastFood'],
      price:10
     },
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:false,
      origins:['odisha','arunachal'],
      star:4,
      imageUrl:'/assets/2.jpeg',
      tags:['fastFood'],
      price:10
     },
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:false,
      origins:['odisha','arunachal'],
      star:4,
      imageUrl:'/assets/3.jpeg',
      tags:['fastFood'],
      price:10
     },
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:false,
      origins:['odisha','arunachal'],
      star:4,
      imageUrl:'/assets/2.jpeg',
      tags:['fastFood'],
      price:10
     },
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:false,
      origins:['odisha','arunachal'],
      star:4,
      imageUrl:'/assets/3.jpeg',
      tags:['fastFood'],
      price:10
     },
     {     
      id:1,
      name:'Pizza peeper',
      cookTime:'10-20',
      favorite:false,
      origins:['odisha','arunachal'],
      star:4,
      imageUrl:'/assets/4.jpeg',
      tags:['fastFood'],
      price:10
     },
     

    ]
  }
}
