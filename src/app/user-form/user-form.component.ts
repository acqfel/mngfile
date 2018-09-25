import { Component, OnInit } from '@angular/core';
import { User} from '../shared/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  name: string;

  constructor() { }

  model = new User(null, '', false, '', '');
  modelKeys = Object.keys(this.model);

  ngOnInit() {
  }

  sendForm = () => {
    console.log(this.model);
  }

}
