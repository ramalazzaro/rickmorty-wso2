import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  imports: [RouterLink],
  selector: 'app-home-page',
  templateUrl: './home-page.html',
})
export class HomePage {
  private oAuthService = inject(OAuthService);

  isLoggedIn = this.oAuthService.hasValidAccessToken();
  claims: any = this.oAuthService.getIdentityClaims();

  login() {
    this.oAuthService.initLoginFlow();
  }
}
