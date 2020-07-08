import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoryComponent } from './story/story.component';
import { StoryPageComponent } from './story-page/story-page.component';

const routes: Routes = [
  {path : 'story',component : StoryComponent},
  {path : 'storyPage',component : StoryPageComponent},
  {path : 'login',component : LoginComponent},
  {path : 'register',component : RegisterComponent},
  {path : '',component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
