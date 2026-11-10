import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  imports: [DatePipe],
  selector: 'app-profile-page',
  templateUrl: './profile-page.html',
})
export class ProfilePage {
  private oAuthService = inject(OAuthService);

  // datos del token de ID que devuelve WSO2 (OpenID Connect)
  claims: any = this.oAuthService.getIdentityClaims();
  claimList = Object.entries(this.claims);

  // vencimiento del token de acceso (en milisegundos)
  accessTokenExpiration = this.oAuthService.getAccessTokenExpiration();
}
