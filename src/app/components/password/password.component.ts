import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  public password_field: string | undefined =  "";

  public sectionColor1 = 'grey';

  public sectionColor2 = 'grey';

  public sectionColor3 = 'grey';

  public password_form = new FormGroup({
    password: new FormControl("",[Validators.required])
  });

  checkPasssword() {
    const password = this.password_form.get('password')?.value;
    if(password!=null){
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%±§^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
      if(password.length == 0){
        this.sectionColor1 = this.sectionColor2 = this.sectionColor3 = 'grey';
      }
      else if(password.length < 8){
        this.sectionColor1 = this.sectionColor2 = this.sectionColor3 = 'red';
      }
      else{
        if(hasLetters && hasDigits && hasSymbols){
          this.sectionColor1 = this.sectionColor2 = this.sectionColor3 = 'green';
        }
        else if((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)){
          this.sectionColor1 = this.sectionColor2 = 'yellow';
          this.sectionColor3 = 'gray';
        }
        else{
          this.sectionColor1 = 'red';
          this.sectionColor2 = this.sectionColor3 = 'gray';
        }
      }
    }
  }
}
