import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private hasLoggedOut: boolean = false;

  constructor(private router: Router) {
    window.addEventListener('storage', () => {
      const isLoggedIn = sessionStorage.getItem('loggedIn');
      if (isLoggedIn !== 'true') {
        this.hasLoggedOut = true;
      }
    });
  }

  canActivate(): boolean {
    const isLoggedIn = sessionStorage.getItem('loggedIn');

    if (isLoggedIn === 'true' && !this.hasLoggedOut) {
      return true;
    } else {
      this.router.navigate(['fgApp/login']);
      return false;
    }
  }

  setLoggedOutFlag() {
    this.hasLoggedOut = true;
  }

  resetLoggedOutFlag() {
    this.hasLoggedOut = false;
  }
}
