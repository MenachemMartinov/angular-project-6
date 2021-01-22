import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-to-user',
  templateUrl: './messages-to-user.component.html',
  styles: [
  ]
})
export class MessagesToUserComponent implements OnInit {

  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() name: string = ''
  constructor() {}
  
  ngOnInit(): void {
  }

}
