import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';
@Component({
  //the selector directs it back to the pain
  selector: 'app-root',
  imports: [RouterOutlet,ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count: number = 0;
  hide: boolean = false;
  //Create button to increaces count once activated 
  OnButtonClick() {
    this.count++;
    alert("button Clicked")
  }
  //Creatng the Button double click to hide text int the html file
  OnDoubleClick() {
    if (this.hide === false) {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }
}
