# Projet de Gestion des Utilisateurs avec LDAP pour FTP & SMTP

Ce projet est une application web permettant de gérer les utilisateurs d'un annuaire LDAP en utilisant une interface Angular. Il inclut également une intégration avec le serveur FTP FileZilla et le serveur SMTP.

## Fonctionnalités

- Authentification des utilisateurs à partir de l'annuaire LDAP.
- Recherche d'utilisateurs dans l'annuaire LDAP.
- Création de nouveaux utilisateurs dans l'annuaire LDAP.
- Interface pour la gestion des utilisateurs.
- Autorisation des utilisateurs à accéder au serveur FTP FileZilla via LDAP.
- Envoi de courriels à partir du serveur SMTP en utilisant les informations d'utilisateur LDAP.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js <img align="center" alt="Node.js Logo" height="20" width="25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/30px-Node.js_logo.svg.png">
- Angular CLI <img align="center" alt="Angular Logo" height="25" width="25" src="https://angular.io/assets/images/logos/angular/angular.svg">
- Serveur LDAP Apache configuré avec les attributs d'utilisateurs requis 
- Serveur FTP FileZilla configuré pour l'accès via LDAP
- Serveur SMTP avec les informations de connexion appropriées

## Installation

1. Clonez ce dépôt sur votre machine locale : 
```
git clone https://github.com/Youssef-Bu/LDAP.git 
```
2. Accédez au répertoire du projet :
```
cd LDAP
```
3. Installez les dépendances du projet :
```
npm i
```
4. Accédez au répertoire du projet Angular pour la gestion des utilisateurs :
```
cd ldap-management
```
5. Installez les dépendances du projet Angular :
```
npm i
```

## Configuration

### Configuration LDAP

1. Dans le fichier `ldap.service.ts` du projet Angular, mettez à jour l'URL du serveur LDAP en remplaçant `http://localhost:3000/ldap` par l'URL de votre serveur LDAP.

2. Assurez-vous que les attributs d'utilisateurs utilisés dans les méthodes `createUser` et `searchUsers` correspondent à ceux de votre annuaire LDAP.

### Configuration FTP (FileZilla)

1. Ouvrez FileZilla et accédez aux paramètres du serveur FTP.

2. Configurez les autorisations d'accès des utilisateurs en utilisant les informations de l'annuaire LDAP.

### Configuration SMTP

1. Dans le fichier `ldap.service.ts` du projet Angular, mettez à jour les informations de connexion SMTP (serveur, port et identifiants) dans les méthodes appropriées.

2. Assurez-vous que les méthodes d'envoi de courriels utilisent les attributs d'utilisateurs corrects, tels que l'adresse e-mail.

## Utilisation

1. Lancez l'application Angular de gestion des utilisateurs en exécutant les commandes suivante :
```
npm run start
```
```
cd ldap-management
```
```
ng serve
```


## Contributeurs
- [Youssef BOUCHIKHI](https://github.com/Youssef-Bu)
- [Achraf GOUNADFA](https://github.com/Achrafgou)



