import { Component } from '@angular/core';
import {MessageService} from 'primeng/api';
import {RouterLink} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {BaseService} from '../../../core/services/base-services/base.service';
import {Login} from '../../../domains/interfaces/login';
import {environmentProd} from '../../../../environments/environment.prod';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-add-user',
  standalone: true,
  providers: [BaseService, MessageService],
  imports: [RouterLink, ReactiveFormsModule, ToastModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  formLogin!: FormGroup;
  login : Login = {
    pseudo: '',
    password: '',
    rememberMe: false
  }

  constructor(private baseService: BaseService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      pseudo: new FormControl("", [Validators.required] ),
      password: new FormControl("", [Validators.required]),
      rememberMe: new FormControl(false, [Validators.required])
    })
    console.log(this.formLogin.controls);
  }
  isInvalidateInput(input: AbstractControl){
    return input.invalid && (input.touched || input.dirty);
  }

  connexion() {
    this.login.pseudo = this.formLogin.value.pseudo;
    this.login.password = this.formLogin.value.password;
    this.login.rememberMe = this.formLogin.value.rememberMe;
    this.baseService.connexion(environmentProd.endPoint.login, this.login).subscribe({
      next: (response: any) => {
        console.log(response)
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Forum created successfully'});
        this.formLogin.reset()
      },
      error: (error: any) => {
        console.log(error)
      }
      // ,complete:()=>{}
    });

  }

}
