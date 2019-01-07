import { Component, OnInit, Input } from '@angular/core';
import { User } from '../structures/user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {

  @Input() user: User;
  
  constructor(private route: ActivatedRoute,
    private userService: UsersService,) { }

  ngOnInit() {
    this.verify();
  }

  verify(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const code = this.route.snapshot.paramMap.get('code');
    this.userService.verifyUser(id, code)
      .subscribe(user => this.user = user);
  }
}
