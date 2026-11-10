import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AuthConfig, OAuthService, provideOAuthClient } from 'angular-oauth2-oidc';
import { routes } from './app.routes';

// datos de la aplicación registrada en WSO2
export const authConfig: AuthConfig = {
  issuer: 'https://localhost:9443/oauth2/token',
  redirectUri: window.location.origin,
  clientId: 'CLIENT_ID',
  responseType: 'code',
  scope: 'openid profile email',
  // el endpoint de autorización de WSO2 no empieza con el issuer, con la validación estricta falla
  strictDiscoveryDocumentValidation: false,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideOAuthClient(),

    // antes de arrancar: carga la configuración de WSO2 y, si volvemos del login con un code, lo canjea por los tokens
    provideAppInitializer(() => {
      const oAuthService = inject(OAuthService);
      oAuthService.configure(authConfig);
      return oAuthService.loadDiscoveryDocumentAndTryLogin();
    }),
  ]
};
