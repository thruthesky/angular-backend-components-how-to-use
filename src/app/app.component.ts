import { Component } from '@angular/core';
import { User } from 'angular-backend';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  view: string = 'forum-infinite';
  constructor( public user: User ) {
    user.setBackendUrl('http://backend.org/index.php');
  }
  onError( str ) {
    alert( str );
  }
}
