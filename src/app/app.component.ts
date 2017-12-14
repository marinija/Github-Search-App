import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { GitHubService } from './services/github.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [GitHubService]
})
export class AppComponent  { name = 'Angular'; }
