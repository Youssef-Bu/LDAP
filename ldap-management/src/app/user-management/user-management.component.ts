import { Component } from '@angular/core';
import { LdapService } from './ldap.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent {
  users!: any[];
  username!: string;
  password!: string;
  newUser!: any;

  constructor(private ldapService: LdapService) {}

  createUser() {
    this.ldapService.createUser(this.newUser).subscribe(
      (response) => {
        console.log('Utilisateur créé avec succès');
      },
      (error) => {
        console.error("Erreur lors de la création de l'utilisateur", error);
      }
    );
  }

  authenticateUser() {
    this.ldapService.authenticateUser(this.username, this.password).subscribe(
      (response) => {
        console.log('Authentification réussie');
      },
      (error) => {
        console.error("Erreur d'authentification", error);
      }
    );
  }

  searchUsers(query: string) {
    this.ldapService.searchUsers(query).subscribe((data) => {
      this.users = data;
    });
  }
}
