import { Component } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";

@Component({
    selector: "template-d",
    templateUrl: './model.component.html',
    styleUrls: ['model.component.css', '../app.component.css']
})
export class ModelComponent {
    signupForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        passwd: new FormControl()
    });
    
    onSubmit(form: NgForm) {
        console.log('on submit: ', form.valid);
      }
}