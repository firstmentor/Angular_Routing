import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyhtmlComponent } from './myhtml/myhtml.component';
import { CssComponent } from './css/css.component';
import { BoostrapComponent } from './boostrap/boostrap.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'

  },

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    children:[
      {path:'',component:AboutComponent},
      {path:'html',component:MyhtmlComponent},
      {path:'css',component:CssComponent},
      {path:'bootstrap',component:BoostrapComponent}
    ],
    
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'content',
    component:ContentComponent
  },
  

//Wildcard Route sab se neeche rakhate hai
  {
    path:'**',
    component:PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
