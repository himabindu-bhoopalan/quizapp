import { Component, OnInit } from '@angular/core';
import { QuizzingService } from '../quizzing.service';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css']
})
export class Quiz1Component implements OnInit {
  list
  count = 0
  options
  infopassed
  difficultylevel
  category
  quizList
  clone
  isChecked: Boolean = false
  finalAnswers = [];
  //for pagination
  startIndex = 0;
  indexNow = 0;
  questionNumber: Number
  //--------------
  dataLoaded: Boolean = false;
  ques_num;
  score:any
  constructor(private quiz: QuizzingService, private route: ActivatedRoute) {
    //1.load the data from api and populate the questions 
    //2.only on eoption should be selected 
    //3.upon clicking again the option should get unselected 
    //4.upon selecting and submitting the quiz -calcuate score and display on the screen 

  }

  ngOnInit(): void {

    //getting data from route
    this.infopassed = this.route.queryParams.subscribe(params => {
      console.log("params");

      console.log(params);

      this.category = params['Category'];
      this.difficultylevel = params['difficultyLevel'];
      console.log(this.category, this.difficultylevel);

    });

    //subscribe to get the quiz questions....1
    this.quiz.listquiz(this.category, this.difficultylevel).subscribe((data) => {
      if (data == null) {
        this.dataLoaded = false;
      } else {
        this.dataLoaded = true;

        console.log(data);
        this.quizList = data["results"] //quizlist
        this.clone = Object.assign({}, this.quizList);
        console.log(this.quizList);

        if (this.quizList.length === 0) {
          let d = <HTMLElement>document.getElementById('no')
          d.innerHTML = "No Quiz found.Could you try another choice?"
        }

        //adding new parameters
        this.quizList.forEach(element => {
          this.options = element.incorrect_answers.concat(element.correct_answer);
          let new_options = this.shuffle(this.options);
          element["options"] = new_options;
          element["option_chosen"] = null;
          // element["question_no"]=this.quizList.indexOf(element);
        });
      }
    });


  }





  shuffle(options) {
    //I have swapped two positons 
    let pos = Math.floor(Math.random() * 4)
    let temp = options[pos];
    options[pos] = options[3];
    options[3] = temp;
    return options;
  }


  change(option_selected, correct_answer, index) {

    //changing the question original array
    this.quizList[index].option_chosen = option_selected;
    this.quizList["option_chosen"]=option_selected;

    console.log(option_selected, correct_answer, index);

    console.dir(this.quizList);

  }


  Calculate() {
    let marks=0;
    
    let no_answer=0;
    console.log(this.quizList);
    
    this.quizList.forEach(element => {
      if(element.correct_answer==element.option_chosen){
        marks++;
      }
      if(element.option_chosen==null||element.option_chosen==undefined){
        no_answer++;

      }
    });
    console.log(no_answer);
    if(no_answer===10){
      this.score=0
    }else{
      this.score=marks;
    }
    // this.score=marks;
    // console.log(this.score);
  }


  //pagination functions

  NextQ() {
      this.startIndex++;
    }
  PreviousQ() {
      this.startIndex--;
  }
  updateIndex(pageIndex) {

    console.log(this.quizList);
    this.startIndex = pageIndex;
    console.log("updateIndex" + this.startIndex);
    if (document.getElementById('prev').style.backgroundColor == "grey" && this.startIndex > 0) {
      document.getElementById('prev').style.backgroundColor == "white";
    }
    if (document.getElementById('next').style.backgroundColor == "grey" && this.startIndex < 10) {
      document.getElementById('next').style.backgroundColor == "white";
    }

  }

} 
