import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() color!:string;
  @Input() text!:string;
  @Output() btnClick=new EventEmitter();


  onClick(){
    // console.log('hello')
    this.btnClick.emit();
  }
}
