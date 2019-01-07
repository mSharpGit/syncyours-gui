import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../structures/user';

@Component({
  selector: 'app-portal-app',
  templateUrl: './portal-app.component.html',
  styleUrls: ['./portal-app.component.css']
})
export class PortalAppComponent implements OnInit {

  @Input() user: User
  
  constructor() { }

  
  ngOnInit() {
  }

}
