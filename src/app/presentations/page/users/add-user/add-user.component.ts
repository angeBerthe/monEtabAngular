import { Component } from '@angular/core';
import {BaseService} from '../../../../core/services/base-services/base.service';
import {MessageService} from 'primeng/api';
import {RouterLink} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {environmentProd} from '../../../../../environments/environment.prod';
import {User} from '../../../../domains/interfaces/user';

@Component({
  selector: 'app-add-user',
  standalone: true,
  providers: [BaseService, MessageService],
  imports: [RouterLink, ReactiveFormsModule, ToastModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {


  form!: FormGroup;
  user : User = {
    pseudo: '',
    password: '',
    rememberMe: false
  }

  constructor(private baseService: BaseService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      pseudo: new FormControl("", [Validators.required, Validators.minLength(2)] ),
      password: new FormControl("", [Validators.required, Validators.minLength(5)]),
      rememberMe: new FormControl(false, [Validators.required])
    })
    console.log(this.form.controls);
  }
  isInvalidateInput(input: AbstractControl){
    return input.invalid && (input.touched || input.dirty);
  }

  saveData() {
    this.user.pseudo = this.form.value.pseudo;
    this.user.password = this.form.value.password;
    this.user.rememberMe = this.form.value.rememberMe;
    this.baseService.create(environmentProd.endPoint.user.create, this.user).subscribe({
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
