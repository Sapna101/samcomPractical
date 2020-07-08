import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  stories : any = [];

  constructor(private http : HttpClient,
              private router : Router,
              private cookieService : CookieService) { }

  ngOnInit(): void {
    if(!this.cookieService.get('token')){
      this.router.navigate(['/login']);
    }
    this.storyList();
  }

  public storyList(){
    this.http.get('http://localhost:3000/storylist/')
    .subscribe(
      (res) => {
          this.stories = res;
      }
    );
  }

}
