import { Component } from '@angular/core';
import { GitHubService } from '../services/github.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent  {
  user: any[];
  repos: any[];
  username: string;
    constructor(private _githubService: GitHubService){
      this.user = false;
    }

    searchUser() {
      this._githubService.updateUser(this.username);

      this._githubService.getUser().subscribe(user => {
        //console.log(user);
        this.user = user;
      });

      this._githubService.getRepos().subscribe(repos => {

        this.repos = repos;
      });
    }
 }
