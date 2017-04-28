import { Component } from '@angular/core';
import {
  TestAll,
  User
} from 'angular-backend';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  view: string = 'forum-infinite';
  constructor(
    public user: User,
    ta: TestAll ) {
    ta.backend.setBackendUrl('http://backend.org/index.php');
    // ta.run();
  }


  onError( str ) {
    alert( str );
  }
}
