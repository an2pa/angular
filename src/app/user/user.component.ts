import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {
  @Input() fromParent!:string;
  child:string="Message from Child!";
  outputChild: string="Output message from cajld!";
  
  @Output() eventEmitter= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  sendMessage():void{
    this.eventEmitter.emit(this.outputChild);
  }
}
