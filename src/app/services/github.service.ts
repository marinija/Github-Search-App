import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
  private username: string;
  private client_id = 'eaf27657078b67bbe9da';
  private client_secret= '6266d32625ff1614134d63d8a3906f3c2d57194c';

  constructor(private _http: Http){
    console.log('Github Sevice Ready');
    this.username = 'bradtraversy';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
