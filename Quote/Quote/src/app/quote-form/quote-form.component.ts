import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Quotess} from "../quotess"

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
authorName!:string;
authorEmail!:string;
quote!:string;

newquote:any;
quotes:Quotess[]=[
  new Quotess("David Njungo","david@gmail.com","The early bird catches the warm",new Date())
]
saveQuote(){
  this.newquote=new Quotess(this.authorName,this.authorEmail,this.quote,new Date)
  this.quotes.push(this.newquote)
}
toggleDetails(index:any){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
@Output() isComplete = new EventEmitter<boolean>();
quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
deleteQuote(isComplete:any, index:any ,){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quote[index]}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
