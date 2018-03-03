import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is a sample Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test Recipe 2', 'This is a sample', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
