# Projet de Gestion des Utilisateurs avec LDAP pour FTP & SMTP

Ce projet est une application web permettant de gérer les utilisateurs d'un annuaire LDAP en utilisant une interface Angular. Il inclut également une intégration avec le serveur FTP FileZilla et le serveur SMTP.

## Fonctionnalités

- Authentification des utilisateurs à partir de l'annuaire LDAP.
- Recherche d'utilisateurs dans l'annuaire LDAP.
- Création de nouveaux utilisateurs dans l'annuaire LDAP.
- Interface pour la gestion des utilisateurs.
- Intégration avec le serveur FTP FileZilla pour autoriser l'accès aux utilisateurs.
- Intégration avec le serveur SMTP pour l'envoi de courriels.

## Configuration

Avant de commencer, assurez-vous d'avoir effectué les étapes suivantes :

1. Installez Node.js et Angular CLI sur votre machine.
2. Configurez un serveur LDAP Apache avec les attributs d'utilisateurs requis (nom, prénom, nom d'utilisateur, mot de passe, etc.).
3. Configurez le serveur FTP FileZilla pour autoriser l'accès aux utilisateurs à partir de l'annuaire LDAP.
4. Configurez le serveur SMTP avec les informations de connexion appropriées.

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
4. On va refaire ça pour la partie front
```
cd ldap-management
```
```
npm i
```



## Configuration LDAP

1. Dans le fichier `ldap.service.ts`, mettez à jour l'URL du serveur LDAP en remplaçant `http://localhost:3000/ldap` par l'URL de votre serveur LDAP.

2. Assurez-vous que les attributs d'utilisateurs utilisés dans les méthodes `createUser` et `searchUsers` correspondent à ceux de votre annuaire LDAP.

## Utilisation

1. Lancez l'application Angular en exécutant la commande suivante :
```
npm run start
```
```
cd ldap-management
```
```
ng serve
```

2. Ouvrez votre navigateur et accédez à l'URL `http://localhost:4200` pour utiliser l'application de gestion des utilisateurs.

## Configuration FTP (FileZilla)

1. Ouvrez FileZilla et accédez aux paramètres du serveur FTP.

2. Configurez les autorisations d'accès des utilisateurs en utilisant les informations de l'annuaire LDAP.


## Configuration SMTP

1. Dans le fichier `ldap.service.ts`, mettez à jour les informations de connexion SMTP (serveur, port, identifiants, etc.) dans les méthodes appropriées.

2. Assurez-vous que les méthodes d'envoi de courriels utilisent les attributs d'utilisateurs corrects, tels que l'adresse e-mail.


## Contributeurs: 
- [Youssef BOUCHIKHI](https://github.com/Youssef-Bu)
- [Achraf GOUNADFA](https://github.com/Achrafgou)



