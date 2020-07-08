import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})
export class StoryPageComponent implements OnInit {
  storyId = " ";
  storyName;
  storypages : any = [];

  constructor(private http : HttpClient,
              private router : Router,
              private activatedroute : ActivatedRoute,
              private cookieService : CookieService) { }

  ngOnInit(): void {
    if(!this.cookieService.get('token')){
      this.router.navigate(['/login']);
    }
    this.storyId = this.activatedroute.snapshot.queryParamMap.get('id');
    this.storyName = this.activatedroute.snapshot.queryParamMap.get('name');
    this.storyPageList();
  }

  public storyPageList(){
    this.http.get('http://localhost:3000/storyPagelist/',{ params: { storyId : this.storyId }})
    .subscribe(
      (res) => {
          this.storypages = res;
      }
    );
  }

}
