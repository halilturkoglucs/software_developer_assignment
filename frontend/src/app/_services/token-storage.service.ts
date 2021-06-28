import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public authorizedToApprove(): boolean {
    let roles = this.getUserRoles();

    return roles.includes('ROLE_DIRECTOR') || roles.includes('ROLE_MANAGER');
  }

  public authorizedToApproveAsManager(): boolean {
    let roles = this.getUserRoles();

    return  roles.includes('ROLE_MANAGER');
  }

  public authorizedToApproveAsDirector(): boolean {
    let roles = this.getUserRoles();

    return roles.includes('ROLE_DIRECTOR');
  }

  private getUserRoles(): string[] {
    let isLoggedIn = !!this.getToken();

    if (isLoggedIn) {
      const user = this.getUser();
      return user.roles;
    }

    return [];
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
