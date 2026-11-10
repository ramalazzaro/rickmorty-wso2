import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

export const authGuard: CanActivateFn = () => {
  const oAuthService = inject(OAuthService);
  const router = inject(Router);

  if (oAuthService.hasValidAccessToken()) {
    return true;
  }

  // sin sesión vuelve al inicio
  return router.parseUrl('/');
};
