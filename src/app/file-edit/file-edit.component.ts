import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-file-edit',
  templateUrl: './file-edit.component.html',
  styleUrls: ['./file-edit.component.scss']
})
export class FileEditComponent implements OnInit {

  fileEdit: string = '';
  editText: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }
 
  save() {
    this.fileEdit = this.editText;
    //this.router.navigate(['/dashboard']);
  }
  
  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (this.fileEdit === this.editText) {
      console.log("true deactivate");
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    console.log("false deactivate");
    
    return this.confirm('Discard changes?');
  }
  
  confirm(message?: string): Observable<boolean> {
      const confirmation = window.confirm(message || 'Is it OK?');
  
      return of(confirmation);
    };

}
