import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [{ path: 'register', component: RegisterComponent },
{path: 'login', component: LoginComponent},
{ path: '', component: HomeComponent },
{path: 'search', component: SearchComponent},
{ path: 'profile/:id', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
