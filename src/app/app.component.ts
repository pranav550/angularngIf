import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularngIf';
  isValid:boolean=true;

  changevalue(valid){
    this.isValid = valid
  }
}
