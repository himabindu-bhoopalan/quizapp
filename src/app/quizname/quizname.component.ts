import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuizzingService } from '../quizzing.service';
@Component({
  selector: 'app-quizname',
  templateUrl: './quizname.component.html',
  styleUrls: ['./quizname.component.css']
})
export class QuiznameComponent implements OnInit {
  selectForm
  quizList
  difficultyLevel=["easy","medium","difficult"];
  categoryList=[
  {name:"General Knowledge",id:9},
  {name:"Entertainment:Books",id:10},
  {name:"Entertainment:Film",id:11},
  {name:"Entertainment:Music",id:12},
  {name:"Entertainment:Musicals and Theatres",id:13},
  {name:"Entertainment:Television",id:14},
  {name:"Entertainment:Video games",id:15},
  {name:"Entertainment:Board games",id:16},
  {name:"Science & Nature",id:17},
  {name:"Science:Computers",id:18},
  {name:"Science:Mathematics",id:19},
  {name:"Mythology",id:20},
  {name:"Sports",id:21},
  {name:"Geography",id:22},
  {name:"History",id:23},
  {name:"Politics",id:24},
  {name:"Art",id:25},
  {name:"Celebrities",id:26},
  {name:"Animals",id:27},
  {name:"Vehicles",id:28},
  {name:"Entertainment:Comics",id:29},
  {name:"Science:Gadgets",id:30},
  {name:"Entertainment:Japanese Anime and Manga",id:31},
  {name:"Entertainment:Cartoon and Animations",id:32}]
  constructor(private quiz:QuizzingService) { 

    this.selectForm = new FormGroup({
      'Category':new FormControl('',Validators.required),
      'difficultyLevel':new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
  onsubmit(){
    // console.log(this.selectForm.value);
    

  }
}
