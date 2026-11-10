import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  private oAuthService = inject(OAuthService);

  isLoggedIn = this.oAuthService.hasValidAccessToken();
  username = this.getUsername();

  login() {
    this.oAuthService.initLoginFlow();
  }

  logout() {
    // revoca el token en WSO2 y cierra la sesión
    this.oAuthService.revokeTokenAndLogout();
  }

  private getUsername() {
    const claims: any = this.oAuthService.getIdentityClaims();
    return claims ? claims['username'] ?? claims['sub'] : '';
  }
}
