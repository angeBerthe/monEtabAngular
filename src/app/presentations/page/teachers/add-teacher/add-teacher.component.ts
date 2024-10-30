import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BaseService} from '../../../../core/services/base-services/base.service';
import {MessageService} from 'primeng/api';
import {environmentProd} from '../../../../../environments/environment.prod';
import {Teacher} from '../../../../domains/interfaces/teacher';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  providers: [BaseService, MessageService],
  imports: [RouterLink, ReactiveFormsModule, ToastModule],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.scss'
})
export class AddTeacherComponent {

  form!: FormGroup;
  teacher : Teacher = {
    firstName : "",
    lastName : "",
    Gender : "",
    phoneNumber : "",
    specialty : "",
    available : true
  }

  constructor(private baseService: BaseService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(2)] ),
      lastName: new FormControl("", [Validators.required, Validators.minLength(5)]),
      gender: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required, Validators.pattern('^(0)[0-9]{9}$')]),
      specialty: new FormControl("", [Validators.required]),
      available: new FormControl(true, [Validators.required])
    })
    console.log(this.form.controls);
  }
  isInvalidateInput(input: AbstractControl){
    return input.invalid && (input.touched || input.dirty);
  }

  saveData() {
    this.teacher.firstName = this.form.value.firstName;
    this.teacher.lastName = this.form.value.lastName;
    this.teacher.Gender = this.form.value.gender;
    this.teacher.phoneNumber = this.form.value.phoneNumber;
    this.teacher.specialty = this.form.value.specialty;
    this.teacher.available = this.form.value.available;
    this.baseService.create(environmentProd.endPoint.teacher.create, this.teacher).subscribe({
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
