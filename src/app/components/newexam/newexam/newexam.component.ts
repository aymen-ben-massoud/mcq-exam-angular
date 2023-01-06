import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newexam',
  templateUrl: './newexam.component.html',
  styleUrls: ['./newexam.component.css']
})
export class NewexamComponent {


  correctnum:any
  name =  new FormControl()
  questionform!:FormGroup
  question: any []= []
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder, private toaster: ToastrService) {}
  ngOnInit(): void {
this.formquestion()
 
  }

formquestion(){

this.questionform = this._formBuilder.group({
  question: ['', Validators.required],
answer1: ['', Validators.required],
answer2: ['', Validators.required],
answer3: ['', Validators.required],
answer4: ['', Validators.required],
correctanswer:[""]
})
}

creatquestion(){
if(this.correctnum){
const model ={
question: this.questionform.value.question,
answer1: this.questionform.value.answer1,
answer2: this.questionform.value.answer2,
answer3: this.questionform.value.answer3,
answer4: this.questionform.value.answer4,
correctanswer:this.questionform.value.answer4
}
this.question.push(model)
}else{
this.toaster.error('enter the correct answer')
}


}




}
