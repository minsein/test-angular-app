import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Input('firstName') firstName;

log(x){
console.log(x);
}
submit(f){
  console.log(f);
}
}
