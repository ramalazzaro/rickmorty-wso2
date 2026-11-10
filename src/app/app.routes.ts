import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page';
import { ProfilePage } from './pages/profile/profile-page';
import { CharactersPage } from './pages/characters/characters-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: HomePage },
  // estas dos rutas solo se ven con la sesión iniciada
  { path: 'perfil', component: ProfilePage, canActivate: [authGuard] },
  { path: 'personajes', component: CharactersPage, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
