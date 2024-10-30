import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Student} from '../../../../domains/interfaces/student';
import {BaseService} from '../../../../core/services/base-services/base.service';
import {MessageService} from 'primeng/api';
import {environmentProd} from '../../../../../environments/environment.prod';
import {RouterModule} from '@angular/router';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-add-student',
  standalone: true,
  providers: [BaseService, MessageService],
  imports: [RouterModule, ReactiveFormsModule, ToastModule ] ,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {

  form!: FormGroup;
  student : Student = {
    firstName : "",
    lastName : "",
    Gender : "",
    phoneNumber : "",
    matricule : "",
    phoneNumberTutorn : ""
  }

  constructor(private baseService: BaseService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(2)] ),
      lastName: new FormControl("", [Validators.required, Validators.minLength(5)]),
      gender: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required, Validators.pattern('^(0)[0-9]{9}$')]),
      matricule: new FormControl("", [Validators.required, Validators.pattern('^[0-9]{5}$')]),
      phoneNumberTutorn: new FormControl("", [Validators.required, Validators.pattern('^(0)[0-9]{9}$')])
    })
    console.log(this.form.controls);
  }
  isInvalidateInput(input: AbstractControl){
    return input.invalid && (input.touched || input.dirty);
  }

  saveData() {
    this.student.firstName = this.form.value.firstName;
    this.student.lastName = this.form.value.lastName;
    this.student.Gender = this.form.value.gender;
    this.student.phoneNumber = this.form.value.phoneNumber;
    this.student.matricule = this.form.value.matricule;
    this.student.phoneNumberTutorn = this.form.value.phoneNumberTutorn;
    this.baseService.create(environmentProd.endPoint.student.create, this.student).subscribe({
      next: (response: any) => {
        console.log(response)
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Forum created successfully'});
        this.form.reset()
      },
      error: (error: any) => {
        console.log(error)
      }
      // ,complete:()=>{}
    });

  }
}
