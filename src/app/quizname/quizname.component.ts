import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuizzingService } from '../quizzing.service';
@Component({
  selector: 'app-quizname',
  templateUrl: './quizname.component.html',
  styleUrls: ['./quizname.component.css']
})
export class QuiznameComponent implements OnInit {
  quizfact=["practicing retrieval of something after learning it, for instance by taking a quiz or test, makes you more likely to retain it for the long term",
  "Testing identifies gaps in knowledge",
  "Testing causes students to learn more from the next study episode. Essentially it reduces forgetting which makes the next related study area more productive.",
    "Testing produces better organization of knowledge by helping the brain organize material in clusters to allow better retrieval."]
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
    if(!this.selectForm.value){
      document.getElementById('alert-text').innerHTML="Please Choose both the fields.";
      document.getElementById('alert-text').style.color="rgb(178,34,34)";
    }
   

  }
  reload(){
    location.reload();
  }
}
