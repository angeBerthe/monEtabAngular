import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-edit-teacher',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './edit-teacher.component.html',
  styleUrl: './edit-teacher.component.scss'
})
export class EditTeacherComponent {

}
