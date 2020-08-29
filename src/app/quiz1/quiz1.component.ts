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
  score
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
        this.quizList = data["results"]
        this.clone = Object.assign({}, this.quizList);
        console.log(this.quizList);

        if (this.quizList.length == 0) {
          let d = <HTMLElement>document.getElementById('no')
          d.textContent = "No Quiz found.Could you try another choice?"
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

    // if (this.finalAnswers.length == 0) {
    //   console.log("the array is empty");
    //   this.finalAnswers.push({ "option_selected": option_selected, "correct_answer": correct_answer, "question_no": index })

    // } else {

    //   console.log("above the question if");
    //   this.finalAnswers.forEach(element => {
    //     if (element.question_no === index) {
    //       console.log("inside the if");
    //       element["option_selected"] = option_selected;
    //       element["correct_answer"] = correct_answer;
    //     } else {
    //       //push the element
    //       console.log("pushing the selection if not present in the array");

    //       this.finalAnswers.push({ "option_selected": option_selected, "correct_answer": correct_answer, "question_no": index })
    //     }
    //   });
    // }
    console.dir(this.quizList);

  }


  Calculate() {
    let marks=0;
    this.quizList.forEach(element => {
      if(element.correct_answer==element.option_chosen){
        marks++;
      }
    });
    this.score=marks
    alert(this.score);
  }


  //pagination functions 
  NextQ() {

    this.isitAnswered(this.startIndex);//function call to make option remain checked 

    console.log(this.quizList);
    if (document.getElementById('prev').style.backgroundColor == "grey" && this.startIndex > 0) {
      document.getElementById('prev').style.backgroundColor == "white";
    }
    //if last question  
    if (this.startIndex == 9) {

      //disable the button or remove it 
      document.getElementById('next').style.backgroundColor = "grey"
    } else {
      this.startIndex++;

    }


  }
  PreviousQ() {

    this.isitAnswered(this.startIndex);//function call to make option remain checked 

    console.log(this.quizList);
    
   
    if (document.getElementById('next').style.backgroundColor == "grey" && this.startIndex < 10) {
      document.getElementById('next').style.backgroundColor == "white";
    }
    console.log('prev-before' + this.startIndex)
    //if first question
    if (this.startIndex == 0) {
      //disable the previous button 
      let x = <HTMLElement>document.getElementById('prev');
      x.style.backgroundColor = "grey";
    } else {
      this.startIndex--;
    }
    console.log('prev-after' + this.startIndex)

  }
  updateIndex(pageIndex) {

    this.isitAnswered(pageIndex);//function call to make option remain checked 

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
  isitAnswered(index) {

    console.log("being checked if is answered",this.quizList,index,this.quizList[index]);
    
    if (this.quizList[index].option_chosen!==null) {
      console.log('205',this.quizList[index].option_chosen);
      
      let optionChosen = this.quizList[index].option_chosen;
      console.log(optionChosen);
      let x = <HTMLInputElement>document.getElementById(optionChosen)
      x.checked = true;
    }

  }

} 
