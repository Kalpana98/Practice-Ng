import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from '../user-list';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Input() userId: any = null;

  @Input() users: any = null;

  @Output() userNameEmit = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes != null &&
      changes.userId != null &&
      changes.userId.currentValue != null
    ) {
      console.log(changes.userId.currentValue);
    }
  }

  ngOnInit(): void {
    this.users = users;

    // this.route.queryParams.subscribe((params) => {
    //   if (params != null && params.id != null && params.id !== '') {
    //     console.log(+params.id);
    //   }
    // });

    this.userNameEmit.emit(this.users);
  }
}
