import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
    <h2> Hello {{parentData}} </h2>

    <button (click)="fireEvent()"> Send Event </button>
    
    `
    ,
  styles: [`

   
  
  `]
})
export class TestComponent implements OnInit {

  // Step1. Declare variable in parent class: public name="aliwer";
  
  // Step2. Property binding in parent html: <app-test [parentData]="name"> </app-test>

  // Step3. Declare Input variable in child class: @Input() public parentData; 
  
  @Input() public parentData; 
  
 // Way the child component sends data to parent component is events.

 // Step1. Declare event emitter of class in child component: @Output() public childEvent = new EventEmitter();

  // Step2. Event binding in parent html:  <app-test (childEvent)="message=$event" ...> </app-test>

  // Step3. Declare variable with relevant name in parent class: public message = "";

 @Output() public childEvent = new EventEmitter();


  constructor() { }

  
  ngOnInit(): void {
   //this.onClick();
  }

  fireEvent(){
    this.childEvent.emit('Hey Revolution');
  }



 





}
