import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'my-app';
  
  form: FormGroup;
  constructor(public formBuilder: FormBuilder, private cookiesService: CookieService){

    this.form= formBuilder.group({
      Nombre: ["", Validators.compose([Validators.required])],
      Apellidos: ["", Validators.compose([Validators.required])],
      
    })
  }
  login() {
    let formObj = this.form.getRawValue();
    this.cookiesService.set('cookie',JSON.stringify(formObj));
    alert("cookie:"+ this.cookiesService.get("cookie"));
    let obj = JSON.parse(this.cookiesService.get("cookie"));
    alert(obj.Nombre);
    alert(obj.Apellidos);
  }
  
}

