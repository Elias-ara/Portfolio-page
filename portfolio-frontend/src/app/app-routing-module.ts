import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

const routes: Routes = [
  { path: '', component: Home, data: { title: 'Home' } },
  { path: 'sobre', component: About, data: { title: 'About' } },
  { path: 'projetos', component: Projects, data: { title: 'Projects' } },
  { path: 'contato', component: Contact, data: { title: 'Contact' } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      errorHandler: (error: any) => console.error('Navigation error:', error),
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
