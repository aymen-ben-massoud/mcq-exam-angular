import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-newexam',
  templateUrl: './newexam.component.html',
  styleUrls: ['./newexam.component.css']
})
export class NewexamComponent {
  id:any
  preview : boolean = false
  stepperindex= 0
  startadd : boolean =  false
subjectname:any
  correctnum:any
  name =  new FormControl("")
  questionform!:FormGroup
  questions: any []= []
  subjects: any []= []
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder, private toaster: ToastrService, private servicedoc : DoctorService,private service : CrudService ) {}
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
correctanswer:this.questionform.value[this.correctnum]
}
this.questions.push(model)
this.questionform.reset()
}

else{
this.toaster.error('enter the correct answer')
}


}

getcorrect(event :any){
 this.correctnum =event.value 
}
start(){
  if(this.name.value == "" ){
  this.toaster.error("fill out your language")
  }else{
    this.startadd = true
  this.subjectname = this.name.value
  }
  if(this.startadd){
    this.stepperindex = 1
  }
  }
next(){
  const model  = {
    name:this.subjectname,
 
   questions:this.questions
   
  }

if(this.preview){
  this.stepperindex = 2
}else{
  this.servicedoc.creatsubject(model).subscribe((res:any)=>{   
    this.preview = true
  
    this.id = res.id})

}
 }





     



clearform(){
  this.questionform.reset()
}
cancle(){
  this.questionform.reset(),
  this.questions = [];
  this.subjectname= "",
  this.name.reset(),
  this.stepperindex = 0
  this.startadd =  false

}



 delete(index: any){
  this.questions.splice(index , 1)
  const model  = {
    name:this.subjectname,
 
   questions:this.questions
   
  }
this.servicedoc.updatesubject(model , this.id).subscribe((res:any)=>{
this.toaster.success('success')
})
 }


}
