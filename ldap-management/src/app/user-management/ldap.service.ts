import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LdapService {
  private ldapUrl = 'http://localhost:3000/ldap';

  constructor(private http: HttpClient) {}

  // TODO: Ajouter d'autres méthodes pour créer, mettre à jour et supprimer des utilisateurs, etc.

  createUser(user: any) {
    const url = `${this.ldapUrl}/users`;
    return this.http.post(url, user);
  }

  authenticateUser(username: string, password: string) {
    const url = `${this.ldapUrl}/authenticate`;
    const credentials = {
      username: username,
      password: password
    };
    return this.http.post(url, credentials);
  }

  searchUsers(query: string) {
    const url = `${this.ldapUrl}/users?query=${query}`;
    return this.http.get<any[]>(url);
  }
}
