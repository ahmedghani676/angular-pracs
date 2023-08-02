import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidationErrors, ValidatorFn, AbstractControl }
  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  todo 
  addItem(newItem: {}) {
    debugger
    this.todo = newItem;
    console.log("ki",this.todo);
    console.log("lp",newItem)
    this.myform.patchValue(
      
      this.todo
    

    )
  }

  myform: FormGroup = new FormGroup({});
  submitted = false;
  todos=[];
  constructor(private fb: FormBuilder) { }
  identityRevealedValidator(passwords: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const password = control.parent?.get(passwords)?.value;
      const confirmPassword = control?.value;

      if (password !== confirmPassword) {
        return { passwordMismatch: true };
      }

      return null;
    };
  }

  createForm() {
    this.myform = this.fb.group({

      title: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.minLength(8)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required, this.identityRevealedValidator('password')]),
      acceptTerms: new FormControl("", [Validators.required])

    });
  }


  ngOnInit() {
    this.createForm();
  }
  get title(): FormControl {

    return this.myform.get('title') as FormControl
  }
  get firstName() {
    return this.myform.get('firstName') as FormControl
  }
  get lastName() {
    return this.myform.get('lastName') as FormControl
  }
  get dob() {
    return this.myform.get('dob') as FormControl
  }
  get email() {
    return this.myform.get('email') as FormControl
  }
  get password() {
    return this.myform.get('password') as FormControl
  }
  get confirmPassword() {
    return this.myform.get('confirmPassword') as FormControl
  }
  get acceptTerms() {
    return this.myform.get('acceptTerms') as FormControl
  }

  addTodo() {

     let index=this.todos.findIndex((t)=>t.title==this.todo.title);
    if (index !== -1) {
      var newTodo = {
        title: this.myform.value.title,

        firstName: this.myform.value.firstName,
        lastName: this.myform.value.lastName,
        dob: this.myform.value.dob,
        email: this.myform.value.email,
        password: this.myform.value.password,
        confirmPassword: this.myform.value.confirmPassword
      };
      this.todos[index] = newTodo;
    }
   else{

   
    var newTodo = {
      title: this.myform.value.title,
      firstName: this.myform.value.firstName,
      lastName: this.myform.value.lastName,
      dob: this.myform.value.dob,
      email: this.myform.value.email,
      password: this.myform.value.password,
      confirmPassword: this.myform.value.confirmPassword
    };
    this.todos.push(newTodo)
  }
  this.myform.reset();
  this.submitted = false 


  }
  
 
  onSubmit() {
    debugger
    this.submitted = true;
    if (this.myform.valid) {
      this.addTodo();
     
    }
    
  }

}


