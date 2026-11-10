import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page';
import { ProfilePage } from './pages/profile/profile-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: HomePage },
  // solo con la sesión iniciada
  { path: 'perfil', component: ProfilePage, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
