
# Projet SAE — Application de suivi des données environnementales

## Contexte et objectifs

Dans le cadre d’un projet de SAE (Situation d’Apprentissage et d’Évaluation), nous avons été chargés de concevoir et de développer une application web permettant de visualiser des données environnementales collectées dans un bâtiment.

Le but du projet était de fournir une solution fonctionnelle à un client fictif (une responsable technique de bâtiment) afin de :

- Suivre en temps réel les **températures**, **taux de CO₂** et **taux d’humidité** dans différentes pièces,
- Permettre aux utilisateurs de consulter l’évolution de ces indicateurs via une interface graphique claire,
- Implémenter un système multi-utilisateurs avec des niveaux d’accès différents selon le profil (responsable / utilisateur classique).

Le projet s’est déroulé en équipe de 4 étudiants, sur plusieurs semaines, avec une démarche inspirée de la méthode agile.

## Approche méthodologique

### Définition des besoins

Dès les premières séances, nous avons clarifié les attentes à travers plusieurs outils :

- Rédaction d’une **vision produit**,
- Définition de **personas** représentant les types d’utilisateurs,
- Constitution d’un **product backlog** organisé par priorité,
- Écriture de **user stories** claires, centrées sur la valeur métier.

Nous avons ensuite organisé notre travail par **sprints**, avec des réunions de synchronisation régulières et des revues de sprint à chaque livraison intermédiaire.

### Répartition des rôles

Même si nous étions tous impliqués dans l’ensemble du projet, nous avons mis en place une répartition souple des tâches :
- Un membre gérait principalement le **back-end** (API, base de données, endpoints),
- Deux d’entre nous développaient le **front-end React**,
- Une personne se chargeait des aspects **documentation, tests** et organisation du code.

## Architecture technique

Le projet repose sur une **architecture full-stack moderne**, découpée de la manière suivante :

### Back-end : FastAPI

Nous avons utilisé **FastAPI** pour créer une API REST performante, claire et bien documentée.

Fonctionnalités principales du back-end :
- Exposition d’endpoints pour récupérer les mesures par capteur, pièce ou date,
- Gestion des utilisateurs avec authentification,
- Intégration d’une base de données SQLite (ou PostgreSQL en option),
- Middleware de sécurité et documentation automatique via Swagger UI.

Exemple d’endpoint :
```http
GET /api/mesures?piece=salle1&date=2024-05-12
````

### Front-end : React

L’interface utilisateur a été développée avec **React**, en respectant les standards modernes de développement web (components, hooks, state management).

Fonctionnalités implémentées :

* Authentification utilisateur,
* Sélection dynamique de pièce et de date,
* Visualisation des mesures sous forme de cartes, de tableaux ou de graphiques (librairie Recharts),
* Responsive design.

### Communication API

Le front-end communique avec l’API via des appels `fetch`, avec gestion des erreurs, des délais et du format des données.

Extrait de code React :

```js
const response = await fetch(`/api/mesures?piece=${room}&date=${selectedDate}`);
const data = await response.json();
```

## Données et affichage

Les données manipulées sont de la forme suivante :

```json
{
  "piece": "Salle informatique 1",
  "capteur": "Capteur A1",
  "date": "2024-05-12T14:30:00",
  "temperature": 23.4,
  "co2": 482,
  "humidite": 38.2
}
```

Nous avons mis en place :

* Une carte de synthèse par pièce,
* Un graphique d’évolution temporelle (avec axes et couleurs codées),
* Un tableau téléchargeable pour les utilisateurs avancés.

## Collaboration et outils

L’équipe a utilisé :

* **Git** avec GitHub pour le versionnement,
* **Kanban** sur GitHub Projects pour suivre les tâches,
* **Markdown** pour documenter l’API et les choix techniques,
* **Tests manuels** pour les principales fonctionnalités,
* Un **README clair et structuré** pour permettre la prise en main du projet.

Des efforts ont été faits pour maintenir une bonne qualité de code :

* Utilisation de conventions de nommage,
* Découpage du code en modules réutilisables,
* Documentation des fonctions principales.

## Défis rencontrés

Parmi les difficultés notables :

* Gérer les appels asynchrones dans React et synchroniser les états,
* Générer des données de test réalistes avec des courbes de valeurs cohérentes,
* Faire fonctionner le projet sur des environnements différents (Windows/Linux),
* Assurer une compatibilité mobile acceptable malgré le temps limité.

## Compétences mobilisées

Ce projet a permis de mettre en œuvre plusieurs compétences du BUT Informatique :

* **Compétence 1** : développement front et back d’une application complète.
* **Compétence 3** : architecture client/serveur communicante.
* **Compétence 4** : structuration, gestion et visualisation de données environnementales.
* **Compétence 5** : conduite de projet agile (vision produit, backlog, sprints).
* **Compétence 6** : travail collaboratif en équipe (versionning, réunions, décisions partagées).

## Conclusion

Le projet SAE a été une expérience très formatrice, autant sur le plan technique que méthodologique. Il m’a permis d’expérimenter toutes les étapes du développement logiciel, du recueil du besoin à la livraison d’un produit fini. J’ai renforcé mes compétences en React et en FastAPI, tout en apprenant à mieux organiser un projet d’équipe. Ce travail m’a également permis de mieux comprendre les attentes utilisateurs et de construire une solution centrée sur l’usage réel.

```

---
