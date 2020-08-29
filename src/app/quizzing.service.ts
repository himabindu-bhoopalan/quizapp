import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuizzingService {

  constructor(private http:HttpClient) { }
  listquiz(category_name,difficulty_level):Observable<any>{
    //amount and type are default 10 and mcq
    return this.http.get("https://opentdb.com/api.php?amount=10&category="+category_name+"&difficulty="+difficulty_level+"&type=multiple");
  }
}
