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

  model = new User('', '', '', false, '');
  modelKeys = Object.keys(this.model);

  ngOnInit() {
  }

  sendForm = () => {
    console.log(this.model);
    this.model = {id: '', name:'', department:'', admin:false, nickname:''};
  }
  
  checkType = (key) => {
    return typeof key === 'string' ? 'text' : typeof key;
  }

}
