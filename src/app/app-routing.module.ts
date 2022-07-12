import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { ServicesComponent } from './component/services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'services', component:ServicesComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'testimonial', component:TestimonialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
