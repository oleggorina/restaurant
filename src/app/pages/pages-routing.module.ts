import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { blogResolver } from '../services/blog.resolver';
import { chefResolver } from '../services/chef.resolver';
import { AboutComponent } from './about/about.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { BookingComponent } from './booking/booking.component';
import { ChefsDetailsComponent } from './chefs-details/chefs-details.component';
import { ChefsComponent } from './chefs/chefs.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'chefs', component: ChefsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'chef-details/:id', component: ChefsDetailsComponent, resolve: {data: chefResolver} },
  { path: 'blog-details/:id', component: BlogDetailsComponent, resolve: {data: blogResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
