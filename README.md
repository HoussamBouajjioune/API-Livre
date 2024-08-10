# Api de Livre

## 📋 <a name="table">Sommaire</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Quick Start](#quick-start)
4. [API REST Exportées](#api-rest-exportées)



## <a name="introduction"> 1 - Introduction</a>
Un Back-End simple de gestion de livres (CRUD) en utilise Node.js , Express et MySql (sans persistance)

## <a name="tech-stack"> 2 - Tech Stack</a>

- Node.js
- Express
- MySql2



## <a name="quick-start"> 3 - Quick Start</a>

Veuillez créer un base de données sous nom « book » et créer la table « livre » à l'aide du script ci-dessous.

### DATA BASE

```
CREATE DATABASE book

CREATE TABLE `livre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) NOT NULL,
  `auteur` varchar(45) DEFAULT NULL,
  `langue` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `titre_UNIQUE` (`titre`)
) 
```

### Cloning the Repository

```bash
git clone https://github.com/HoussamBouajjioune/API-Livre.git
cd API-Livre
```

### Project setup

Installez les dépendances du projet en utilisant npm :

#### Install
```
npm install
```

#### Run
```
node server.js
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur ou postman(recommander).



## <a name="api-rest-exportées"> 4 - API REST Exportées</a>

| Methode | URLs | Action |
| --- | --- | --- |
| get | ``` /api/livre/all ``` | afficher tous les livres |
| get | ``` /api/livre/:id ``` | afficher un livre specifique |
| post | ``` /api/livre/add ``` | ajouter un livre |
| put | ``` /api/livre/update/:id ``` | modifier un livre |
| delete | ``` /api/livre/delete/:id ``` | supprimer un livre |
